import React, { useState, useEffect } from "react";
import axios from "axios";

function FindOpportunities() {
  const [keyword, setKeyword] = useState("");
  const [selectedCause, setSelectedCause] = useState("");
  const [selectedSkills, setSelectedSkills] = useState("");
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([
    "Education & Literacy",
    "Environmental Conservation",
    "Healthcare & Wellness",
    "Youth Development",
    "Arts & Culture",
    "Animal Welfare",
  ]);

  const [openCategories, setOpenCategories] = useState({});

  const causeAreas = [
    "Education",
    "Environmental",
    "Healthcare",
    "Youth",
    "Arts",
    "Animal",
    "Other",
  ];
  const skills = [
    "Teaching",
    "Education",
    "Medical Assistance",
    "Mentoring",
    "Artistic Skill",
    "Animal Care",
    "Other",
  ];

  const handleSearch = () => {
    console.log("Searching:", keyword, selectedCause, selectedSkills);
    fetchEvents(); // Call a function to fetch events based on search criteria
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when component mounts
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5010/findopportunities",
        {
          params: {
            keyword,
            cause: selectedCause,
            skills: selectedSkills,
          },
        }
      );
      console.log("Response from server:", response);
      console.log("Data from server:", response.data);

      // Check if response.data is an array before updating state
      if (Array.isArray(response.data)) {
        setEvents(response.data);
      } else {
        console.error(
          "Invalid data format received from server:",
          response.data
        );
        // Handle error appropriately, e.g., setEvents([])
      }
    } catch (error) {
      console.error(
        "Error fetching events:",
        error.response || error.message || error
      ); // Enhanced error logging
      // Handle error (e.g., show error message)
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const toggleCategory = (category) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="min-h-[600px] sm:min-h-[750px] flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-cream text-blue">
      <div className="absolute top-28 left-2 right-0 z-10 w-full max-w-[1445px] h-auto bg-white rounded-md shadow-md overflow-hidden">
        {/* Search Bar */}
        <div className="flex w-full bg-white rounded-md shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Keyword"
            className="px-4 py-2 w-full lg:w-1/4 text-1xl outline-none align-middle"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <select
            className="px-4 py-2 bg-white border-l text-1xl w-1/4 outline-none"
            value={selectedCause}
            onChange={(e) => setSelectedCause(e.target.value)}
          >
            <option value="">Cause Area</option>
            {causeAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 bg-white border-l w-1/3 outline-none text-1xl"
            value={selectedSkills}
            onChange={(e) => setSelectedSkills(e.target.value)}
          >
            <option value="">Skills</option>
            {skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>

          <button
            className="bg-blue text-white px-24 py-4 hover:bg-darkBlue ml-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Categories and Events */}
        <div
          className="mt-6 p-4 bg-gray-100 rounded-md"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          {categories.map((category) => (
            <div key={category}>
              {/* Category Title */}
              <h2
                className="text-3xl font-semibold mb-4 ml-4 cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </h2>

              {/* Display fetched events for the current category */}
              {openCategories[category] && (
                <div className="pb-4">
                  {events
                    .filter((event) => event.category === category)
                    .map((event) => (
                      <div
                        key={event.id}
                        className="bg-white p-6 mt-4 rounded-md shadow-md"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {event.OppTitle}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Organization:</strong> {event.OrgName}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Address:</strong> {event.OrgAddress}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Description:</strong> {event.OrgDescription}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Date Posted:</strong>{" "}
                          {formatDate(event.datePosted)}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindOpportunities;
