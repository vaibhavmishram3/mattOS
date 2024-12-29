import React from 'react'

const Logout = () => {
  return (
  <div className='w-[94vw]   h-[83vh] flex justify-center items-center'>
      <div className="w-[576px] p-0.5 border-2 border-black bg-white">
        <div className="flex  items-center border-4 border-black bg-white">
          <div className="px-5 w-24 h-32 py-5">
            <img
            className="w-[48px]"
              src="https://cdn.prod.website-files.com/5bac0565754dd6b3e278aeb2/5c4ccc57a29a8fd736eeabe5_alert-graphite.svg"
              alt=""
            />
          </div>
          <div className="w-fit">
            <div className="text">
              <p>Permission denied. Please reconsider your actions.</p>
            </div>
            <div className="button flex justify-end">
              <div className="cancel">Cancle</div>
              <div className="logout">Logout</div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Logout