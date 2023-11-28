const AddressData = ({ city, state, country, UpdateData }) => {
  return (
    <div className="GroupField">
      <div className="inputField">
        <label htmlFor="name">City</label>
        <input
          required
          value={city}
          onChange={(e) => UpdateData({ city: e.target.value })}
          type="text"
        />
      </div>
      <div className="inputField">
        <label htmlFor="LastName">Country</label>
        <input
          required
          value={country}
          onChange={(e) => UpdateData({ country: e.target.value })}
          type="text"
        />
      </div>
      <div className="inputField">
        <label htmlFor="name">State</label>
        <input
          required
          value={state}
          onChange={(e) => UpdateData({ state: e.target.value })}
          type="text"
        />
      </div>
    </div>
  );
};

export default AddressData;
