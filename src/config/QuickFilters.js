const complaintStatus = [
    {
        label:'Registered',
        value:'registered'
    },
    {
        label:'In Progress',
        value:'in_progress'
    },
    {
        label:'Reported',
        value:'reported'
    },
    {
        label:'Report Acknowledged',
        value:'report_acknowledged'
    },
    {
        label:'Rejected',
        value:'rejected'
    },
    {
        label:'Resolved',
        value:'resolved'
    },
]

export const complaintDetailsFilterConfig = {
        fields: [
            {
                label: 'Content',
                id: 'content',
                type : 'textarea',
                options:[],
                edit:false
            },
            {
                label: 'User',
                id: 'user',
                type : 'input',
                options:[],
                edit:false
            },
            {
                label: 'Department',
                id: 'department',
                type : 'input',
                options:[],
                edit:false
            },
            {
                label: 'Category',
                id: 'category',
                type : 'input',
                options:[],
                edit:false
            },
            {
                label: 'Location',
                id: 'location',
                type : 'input',
                options:[],
                edit:false
            },
            {
                label: 'Status',
                id: 'status',
                type : 'dropdown',
                options:complaintStatus,
                edit:true
            },
            // {
            //     label: 'Created At',
            //     id: 'created_at',
            //     type : 'input',
            //     options:[],
            //     edit:false
            // },{
            //     label: 'Updated At',
            //     id: 'updated_at',
            //     type : 'input',
            //     options:[],
            //     edit:false
            // },
        ]
}

export const departmentDetailsFilterConfig = {
    fields:[
    {
        label: 'ID',
        id: 'id',
        type : 'input',
        options:[],
        edit:false
    },{
        label: 'Name',
        id: 'name',
        type : 'input',
        options:[],
        edit:false
    },{
        label: 'Categories',
        id: 'categories',
        type : 'table',
        options:[],
        edit:false
    },
    // {
    //     label: 'Updated At',
    //     id: 'updated_at',
    //     type : 'input',
    //     options:[],
    //     edit:false
    // },{
    //     label: 'Updated At',
    //     id: 'updated_at',
    //     type : 'input',
    //     options:[],
    //     edit:false
    // },
]
}