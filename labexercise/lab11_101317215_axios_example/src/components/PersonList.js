import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  state = {
    persons: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then((res) => {
        const persons = res.data.results;
        this.setState({ persons, loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ error: 'Failed to load data', loading: false });
      });
  }

  // Helper method: format a date string to YYYY-MM-DD
  formatDate(dateStr) {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return dateStr;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  render() {
    const { persons, loading, error } = this.state;

    if (loading) {
      return <div className="loading">Loading data...</div>;
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    return (
      <div className="person-list-container">
        {persons.map((person) => {
          const fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
          const uuid = person.login.uuid;
          const address = `${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`;
          const birthDate = this.formatDate(person.dob.date);
          const age = person.dob.age;
          const registerDate = this.formatDate(person.registered.date);
          const timeZoneDesc = person.location.timezone.description;

          return (
            <div className="user-card" key={person.login.uuid}>
              {/* Top title bar showing name and uuid */}
              <div className="user-card-title-bar">
                {fullName} - {uuid}
              </div>

              {/* Main content area: left avatar + right details */}
              <div className="user-card-body">
                {/* Left: avatar and button */}
                <div className="user-avatar-section">
                  <img
                    className="user-avatar"
                    src={person.picture.large}
                    alt={fullName}
                  />
                  <button className="details-button">Details</button>
                </div>

                {/* Right: text information */}
                <div className="user-info-section">
                  <p>
                    <span className="label">User Name:</span>{' '}
                    {person.login.username}
                  </p>
                  <p>
                    <span className="label">Gender:</span>{' '}
                    {person.gender.toUpperCase()}
                  </p>
                  <p>
                    <span className="label">Time Zone Description:</span>{' '}
                    {timeZoneDesc}
                  </p>
                  <p>
                    <span className="label">Address:</span> {address}
                  </p>
                  <p>
                    <span className="label">Email:</span> {person.email}
                  </p>
                  <p>
                    <span className="label">Birth Date and Age:</span>{' '}
                    {birthDate} ({age})
                  </p>
                  <p>
                    <span className="label">Register Date:</span>{' '}
                    {registerDate}
                  </p>
                  <p>
                    <span className="label">Postcode:</span>{' '}
                    {person.location.postcode}
                  </p>
                  <p>
                    <span className="label">Phone:</span> {person.phone}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PersonList;
