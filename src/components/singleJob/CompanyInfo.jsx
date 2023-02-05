import React from 'react'

const CompanyInfo = () => {
    return (
        <div className='pt-6'>
            <div className=' p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' >
                <h3>Company Info</h3>
                <div className='grid gap-3 pt-5'>
                    <p className='text-sm'>Compnay Name: Dropbox Inc</p>
                    <p className='text-sm'>Address: London, United Kingdom</p>
                    <p className='text-sm'>Compnay SIze: 2k Employee</p>
                    <p className='text-sm'>Industry: Technology</p>
                    <p className='text-sm'>Phone: +1234 567 8910</p>
                    <p className='text-sm'>Email: info@dropbox.com</p>
                    <p className='text-sm'>Website: www.dropbox.com</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo
