const UserCard = ({ user, profileView }) => {
  const { firstName, lastName, age, gender, about, photoURL } = user;
  return (
    <div className="card w-96 bg-base-200 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <figure className="h-56 overflow-hidden">
        <img
          src={photoURL}
          alt="user-profile"
          className="w-auto h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>
          {age ? age + "," : age} {gender}
        </p>
        <p className="break-words line-clamp-4 leading-relaxed text-sm md:text-base bg-base-200 rounded-md shadow-sm">
          {about}
        </p>
        {!profileView && (
          <div className="card-actions mt-4">
            <button className="btn btn-success btn-sm px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors">
              Interested
            </button>
            <button className="btn btn-error btn-sm px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors">
              Ignore
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
