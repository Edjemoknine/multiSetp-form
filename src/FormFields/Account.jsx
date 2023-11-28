const Account = ({ email, password, UpdateData }) => {
  return (
    <div className="GroupField">
      <div className="inputField">
        <label htmlFor="name">Email</label>
        <input
          value={email}
          onChange={(e) => UpdateData({ email: e.target.value })}
          type="email"
          required
        />
      </div>
      <div className="inputField">
        <label htmlFor="LastName">Password</label>
        <input
          required
          value={password}
          onChange={(e) => UpdateData({ password: e.target.value })}
          type="password"
        />
      </div>
    </div>
  );
};

export default Account;
