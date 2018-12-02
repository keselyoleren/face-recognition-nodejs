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
console.log(JSON.stringify(faceMatcher))

}
