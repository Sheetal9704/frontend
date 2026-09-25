const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, about, photoURL } = user;
  return (
    <div className="flex justify-center my-12">
      <div className="card w-96 bg-base-300 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <figure className="h-56 overflow-hidden">
          <img
            src={photoURL}
            alt="user-profile"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>
            {age ? age + "," : age} {gender}
          </p>
          <p>{about}</p>
          <div className="card-actions mt-4">
            <button className="btn btn-success btn-sm px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors">
              Interested
            </button>
            <button className="btn btn-error btn-sm px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors">
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
