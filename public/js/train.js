getAllfolder()
var classes;

function getAllfolder(){
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          var data = xmlhttp.responseText
          dataArray = JSON.parse(data)
          array = dataArray.map(function(item){
            return  item.nama.toString()
          })
          getFolder(array)
      }
  }
  xmlhttp.open("GET", "/dataset/sub-folder", true);
  xmlhttp.send();
}

function getFolder(array){
  classes = array  
}



function getFaceImageUri(className, idx) {
  return `${className}/${className}${idx}.png`
}

function renderFaceImageSelectList(selectListId, onChange, initialValue) {
  const indices = [1, 2, 3, 4, 5]
  function renderChildren(select) {
    classes.forEach(className => {
      const optgroup = document.createElement('optgroup')
      optgroup.label = className
      select.appendChild(optgroup)
      indices.forEach(imageIdx =>
        renderOption(
          optgroup,
          `${className} ${imageIdx}`,
          getFaceImageUri(className, imageIdx)
        )
      )
    })
  }

  renderSelectList( 
    selectListId,
    onChange,
    getFaceImageUri(initialValue.className, initialValue.imageIdx),
    renderChildren
  )
}

// fetch first image of each class and compute their descriptors
async function createBbtFaceMatcher(numImagesForTraining = 1) {
    await faceapi.loadTinyFaceDetectorModel('/')
    await faceapi.loadFaceLandmarkModel('/')
    await faceapi.loadFaceRecognitionModel('/')
    const maxAvailableImagesPerClass = 5
    numImagesForTraining = Math.min(numImagesForTraining, maxAvailableImagesPerClass)

    const labeledFaceDescriptors = await Promise.all(classes.map(
        async className => {
        const descriptors = []
        for (let i = 1; i < (numImagesForTraining + 1); i++) {
            const img = await faceapi.fetchImage("../images/" + className + "/" + className + i + ".png")
            descriptors.push(await faceapi.computeFaceDescriptor(img))
        }

        return new faceapi.LabeledFaceDescriptors(
            className,
            descriptors
        )
    }
  ))

var faceMatcher =  new faceapi.FaceMatcher(labeledFaceDescriptors)
var data = JSON.stringify(faceMatcher)
console.log(data)
// console.log(JSON.stringify(faceMatcher))

var areaChartOptions = {
  showScale               : true,
  scaleGridLineColor      : 'rgba(0,0,0,.05)',
  scaleGridLineWidth      : 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines  : true,
  bezierCurve             : true,
  bezierCurveTension      : 0.3,
  pointDot                : false,
  pointDotRadius          : 4,
  pointDotStrokeWidth     : 1,
  pointHitDetectionRadius : 20,
  datasetStroke           : true,
  datasetStrokeWidth      : 2,
  datasetFill             : true,
  maintainAspectRatio     : true,
  responsive              : true
}

var areaChartData = {
labels  : classes,
// labels : ["January","February","March","April","May","June","July"],
datasets: [
  {
    label               : 'Digital Goods',
    fillColor           : 'rgba(60,141,188,0.9)',
    strokeColor         : 'rgba(60,141,188,0.8)',
    pointColor          : '#3b8bba',
    pointStrokeColor    : 'rgba(60,141,188,1)',
    pointHighlightFill  : '#fff',
    pointHighlightStroke: 'rgba(60,141,188,1)',
    data : [65,59,90,81,56,55,40]
    // data: classes
  }
]
}


var lineChartCanvas          = $('#lineChart').get(0).getContext('2d')
var lineChart                = new Chart(lineChartCanvas)
var lineChartOptions         = areaChartOptions
lineChartOptions.datasetFill = false
lineChart.Line(areaChartData, lineChartOptions)
}


  