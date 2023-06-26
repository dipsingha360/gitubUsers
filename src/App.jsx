import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <h2 className="font-medium text-5xl text-blue-50 text-center pt-10 pb-20">
          List of Github Users
        </h2>
        <div className="cards container mx-auto flex gap-10 px-4 justify-start items-center py-20 bg-slate-300 shadow-sm w-[25%] h-40 rounded-lg">
          <div className="card-left img ">
            <img
              className="w-32 h-32 object-cover bg-slate-500 rounded-lg "
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
              alt=""
            />
          </div>
          <div className="card-right infos flex flex-col gap-2">
            <h4 className="text-2xl font-bold  text-[#2b2b2b]">Dip Singha</h4>
            <p className="font-normal  text-[#696666]">Web Developer</p>
            <div className="info flex gap-8 text-center bg-white rounded-md px-4">
              <div className="article">
                <p className="font-normal text-[#817f7f] ">Article</p>
                <p className="font-medium text-[#2b2b2b] ">38</p>
              </div>
              <div className="followers">
                <p className="font-normal text-[#817f7f] ">Followers</p>
                <p className="font-medium text-[#2b2b2b] ">880</p>
              </div>
              <div className="rating">
                <p className="font-normal text-[#817f7f] ">Rating</p>
                <p className="font-medium text-[#2b2b2b] ">4.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
