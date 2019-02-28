import React from 'react'

const Staff = ({staff}) => {
  return(
    <div className="col-12 col-md-4">
      <img src={require(`../assets/${staff.image_name}`)} alt={staff.name + "'s Headshot"} />
      <p className="mild_blue_text font-weight-bold h4 mt-3">{staff.name}</p>
      <h5 className="light_darker_text h5">{staff.title}
      </h5>
      <p className="text-muted">
        {staff.description}
      </p>
    </div>
  )
}

export default Staff;
