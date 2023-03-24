import React from 'react'
// import pdf from '../components/Pdf/syllabus.pdf'
function OpenPdf({link}) {
  return (
    <div className='w-full flex items-center justify-center mx-auto mt-2'>
      {/* <a href={link+'?preview=1'} data-previewable="1">Link</a> */}
      <iframe src={link} frameborder="0" height="800" min-w width="99%"></iframe>
    </div>
  )
}

export default OpenPdf
