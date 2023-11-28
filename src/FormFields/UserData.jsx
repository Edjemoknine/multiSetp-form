const UserData = ({ name, lastName, age, UpdateData }) => {
  return (
    <div className="GroupField">
      <div className="inputField">
        <label htmlFor="name">Name</label>
        <input
          required
          value={name}
          onChange={(e) => UpdateData({ name: e.target.value })}
          type="text"
        />
      </div>
      <div className="inputField">
        <label htmlFor="LastName">LastName</label>
        <input
          required
          value={lastName}
          onChange={(e) => UpdateData({ lastName: e.target.value })}
          type="text"
        />
      </div>
      <div className="inputField">
        <label htmlFor="name">Age</label>
        <input
          required
          value={age}
          onChange={(e) => UpdateData({ age: e.target.value })}
          type="text"
        />
      </div>
    </div>
  );
};

export default UserData;
