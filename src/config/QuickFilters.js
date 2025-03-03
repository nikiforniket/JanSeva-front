const complaintStatus = [
  {
    label: "Registered",
    value: "registered",
  },
  {
    label: "In Progress",
    value: "in_progress",
  },
  {
    label: "Reported",
    value: "reported",
  },
  {
    label: "Report Acknowledged",
    value: "report_acknowledged",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Resolved",
    value: "resolved",
  },
];
const DemandStatus = [
  {
    label: "Registered",
    value: "registered",
  },
  {
    label: "In Progress",
    value: "in_progress",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Resolved",
    value: "resolved",
  },
];

const suggestionStatus = [
  {
    label: "Registered",
    value: "registered",
  },
  {
    label: "Viewed",
    value: "viewed",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "In consideration",
    value: "in_consideration",
  },
];

const geoComplaintStatus = [
  {
    label: "Registered",
    value: "registered",
  },
  {
    label: "In Progress",
    value: "in_progress",
  },
  {
    label: "Reported",
    value: "reported",
  },
  {
    label: "Report Acknowledged",
    value: "report_acknowledged",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Resolved",
    value: "resolved",
  },
];

export const complaintDetailsFilterConfig = {
  fields: [
    {
      label: "UUID",
      id: "uuid",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Content",
      id: "content",
      type: "textarea",
      options: [],
      edit: false,
    },
    {
      label: "User",
      id: "user",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Sector",
      id: "department",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Category",
      id: "category",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Location",
      id: "location",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Status",
      id: "status",
      type: "dropdown",
      options: complaintStatus,
      edit: true,
    },
    {
      label: "Created At",
      id: "created_at",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Updated At",
      id: "updated_at",
      type: "input",
      options: [],
      edit: false,
    },
  ],
};

export const departmentDetailsFilterConfig = {
  fields: [
    {
      label: "ID",
      id: "id",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Name",
      id: "name",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Categories",
      id: "categories",
      type: "table",
      options: [],
      edit: false,
    },
    // {
    //   label: "Updated At",
    //   id: "updated_at",
    //   type: "input",
    //   options: [],
    //   edit: false,
    // },
    // {
    //   label: "Updated At",
    //   id: "updated_at",
    //   type: "input",
    //   options: [],
    //   edit: false,
    // },
  ],
};

export const demandDetailsConfig = {
  fields: [
    {
      label: "UUID",
      id: "uuid",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Subject",
      id: "subject",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      options: [],
      edit: false,
    },
    // {
    //     label: 'Sign',
    //     id: 'sign',
    //     type : 'input',
    //     options:[],
    //     edit:false
    // },
    {
      label: "User",
      id: "user",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Status",
      id: "status",
      type: "dropdown",
      options: DemandStatus,
      edit: false,
    },
    {
      label: "Created At",
      id: "created_at",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Updated At",
      id: "updated_at",
      type: "input",
      options: [],
      edit: false,
    },
  ],
};

export const suggestionsDetailsFilterConfig = {
  fields: [
    {
      label: "UUID",
      id: "uuid",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      options: [],
      edit: false,
    },
    {
      label: "User",
      id: "user",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Status",
      id: "status",
      type: "dropdown",
      options: suggestionStatus,
      edit: false,
    },
    {
      label: "Created At",
      id: "created_at",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Updated At",
      id: "updated_at",
      type: "input",
      options: [],
      edit: false,
    },
  ],
};

export const geoComplaintDetailsFilterConfig = {
  fields: [
    {
      label: "UUID",
      id: "uuid",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      options: [],
      edit: false,
    },
    {
      label: "User",
      id: "user",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Status",
      id: "status",
      type: "dropdown",
      options: geoComplaintStatus,
      edit: false,
    },
    {
      label: "Complaint Type",
      id: "complaint_type",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Lat",
      id: "lat",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Long",
      id: "long",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Created At",
      id: "created_at",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Updated At",
      id: "updated_at",
      type: "input",
      options: [],
      edit: false,
    },
  ],
};

export const schemeDetailsConfig = {
  fields: [
    {
      label: "Id",
      id: "id",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Is Active",
      id: "is_active",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Name",
      id: "name",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Sector",
      id: "sector",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Year of Launch",
      id: "year",
      type: "input",
      options: [],
      edit: false,
    },
  ],
};

export const fundDetailsFilterConfig = {
  fields: [
    {
      label: "Id",
      id: "id",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Representative",
      id: "representative",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Year",
      id: "year",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Amount",
      id: "amount",
      type: "input",
      options: [],
      edit: false,
    },
    // {
    //   label: "Is Deleted",
    //   id: "is_deleted",
    //   type: "input",
    //   options: [],
    //   edit: false,
    // },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      options: [],
      edit: false,
    },
    {
      label: "Created At",
      id: "created_at",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Updated At",
      id: "updated_at",
      type: "input",
      options: [],
      edit: false,
    },
  ],
};

export const allocationDetailsFilterConfig = {
  fields: [
    {
      label: "Id",
      id: "id",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Fund",
      id: "fund",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Is Deleted",
      id: "is_deleted",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Amount",
      id: "amount",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Month Start",
      id: "month_start",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Month End",
      id: "month_end",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      options: [],
      edit: false,
    },
    
    {
      label: "Created At",
      id: "created_at",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Updated At",
      id: "updated_at",
      type: "input",
      options: [],
      edit: false,
    },
  ],
};

export const workDetailsFilterConfig = {
  fields: [
    {
      label: "Id",
      id: "id",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Fund",
      id: "fund",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Amount",
      id: "amount",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Location",
      id: "location",
      type: "input",
      options: [],
      edit: false,
    },
    // {
    //   label: "Scheme",
    //   id: "scheme",
    //   type: "input",
    //   options: [],
    //   edit: false,
    // },
    {
      label: "Year",
      id: "year",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      options: [],
      edit: false,
    },
  ],
};

export const achievementDetailsConfig = {
  fields: [
    {
      label: "Id",
      id: "id",
      type: "input",
      options: [],
      edit: false,
    },
    // {
    //   label: "Fund",
    //   id: "fund",
    //   type: "input",
    //   options: [],
    //   edit: false,
    // },
    {
      label: "Amount",
      id: "amount",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Location",
      id: "location",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Scheme",
      id: "scheme",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Year",
      id: "year",
      type: "input",
      options: [],
      edit: false,
    },
    {
      label: "Description",
      id: "description",
      type: "textarea",
      options: [],
      edit: false,
    },
  ],
};