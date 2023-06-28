import { useEffect, useState } from "react";
import loading from "./loading";

function Card() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      console.log("err" + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // if (loading) {
  //   return <loading />;
  // }

  return (
    <div>
      <h2 className="font-medium text-5xl text-blue-50 text-center pt-10 pb-20">
        List of Github Users
      </h2>
      <div className="all-cards mx-10 flex gap-6 flex-row flex-wrap">
        {users.map((user, index) => {
          return (
            <>
              <div className="cards flex justify-around items-center py-20 bg-slate-300 shadow-sm w-[24%] h-40 rounded-lg">
                <div className="card-left img ">
                  <img
                    className="w-32 h-32 object-cover bg-slate-500 rounded-lg "
                    src={user.avatar_url}
                    alt=""
                  />
                </div>
                <div className="card-right infos flex flex-col gap-2">
                  <h4 className="text-2xl font-bold  text-[#2b2b2b]">
                    {user.login}
                  </h4>
                  <p className="font-normal  text-[#696666]">Developer</p>
                  <div className="info flex gap-8 text-center bg-white rounded-md px-4">
                    <div className="article">
                      <p className="font-normal text-[#817f7f] ">Article</p>
                      <p className="font-medium text-[#2b2b2b] ">38</p>
                    </div>
                    <div className="followers">
                      <p className="font-normal text-[#817f7f] ">Type</p>
                      <p className="font-medium text-[#2b2b2b] ">{user.type}</p>
                    </div>
                    <div className="rating">
                      <p className="font-normal text-[#817f7f] ">Rating</p>
                      <p className="font-medium text-[#2b2b2b] ">4.5</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
