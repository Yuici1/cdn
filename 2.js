
var openImg = (imageSrc) => {
    const a = document.createElement('a')
    const name = imageSrc.substring(imageSrc.lastIndexOf('/') + 1)
    a.setAttribute('download', name)
    a.setAttribute('target', '_blank')
    a.setAttribute('href', imageSrc)
    a.click()
}

var openImg = (imageSrc) => {
    const a = document.createElement('a')
    const name = imageSrc.substring(imageSrc.lastIndexOf('/') + 1)
    a.setAttribute('download', name)
    a.setAttribute('target', '_blank')
    a.setAttribute('href', imageSrc)
    a.click()
}
var downloadImg = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
        openImg(URL.createObjectURL(xhr.response))
    }
    xhr.send();
    
}

var url = 'https://file-1252792890.cos.ap-beijing-1.myqcloud.com/lanhu/image/079f942d-d652-49b8-84ab-8496013aa5fd/9049451c402d1acb54e26890228f09a0.png'
downloadImg(url)



// openImg('https://img3.doubanio.com/f/sns/19886d443852bee48de2ed91f4a3bdfdaf8c809c/pics/nav/logo_db.png')