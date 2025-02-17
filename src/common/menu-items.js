const TWO_COl_MENU_ITEMS = [
	{
		key: 'Complaint & Grievance Cell',
		icon: 'smart-home',
		label: 'Complaint & Grievance Cell',
		isTitle: true,
		children: [
			{
				key: 'Departments',
				label: 'Sectors',
				url: '/sectors',
				parentKey: 'Complaint & Grievance Cell',
			},
			{
				key: 'Complaint',
				label: 'Complaint',
				url: '/complaints',
				parentKey: 'Complaint & Grievance Cell',
			},
			{
				key: 'Geo Complaints',
				label: 'Geo Complaints',
				url: '/geocomplaints',
				parentKey: 'Complaint & Grievance Cell',
			},
			{
				key: 'Suggestion',
				label: 'Suggestion',
				url: '/suggestions',
				parentKey: 'Complaint & Grievance Cell',
			},
			{
				key: 'Demand',
				label: 'Demand',
				url: '/demandletters',
				parentKey: 'Complaint & Grievance Cell',
			}
		],
	},
	{
		key: 'Achievements',
		icon: 'smart-home',
		label: 'Achievements',
		isTitle: true,
		children: [
			{
				key: 'Departments',
				label: 'Sectors',
				url: '/sectors',
				parentKey: 'Achievements',
			},
			{
				key: 'Fund',
				label: 'Fund',
				url: '/fund',
				parentKey: 'Achievements',
			},
			{
				key: 'Scheme',
				label: 'Scheme',
				url: '/schemes',
				parentKey: 'Achievements',
			},
			{
				key: 'Work Done',
				label: 'Work Done',
				url: '/workdone',
				parentKey: 'Achievements',
			}
		],
	},
	// {
	// 	key: 'Departments & Categories',
	// 	icon: 'smart-home',
	// 	label: 'Departments & Categories',
	// 	isTitle: true,
	// 	children: [
	// 		{
	// 			key: 'Departments',
	// 			label: 'Departments',
	// 			url: '/departments',
	// 			parentKey: 'Departments & Categories',
	// 		}
	// 	],
	// },
	// {
	// 	key: 'apps',
	// 	icon: 'apps',
	// 	label: 'Apps',
	// 	isTitle: true,
	// 	children: [
	// 		{
	// 			key: 'apps-analytics',
	// 			label: 'Analytics',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'analytic-customers',
	// 					label: 'Customers',
	// 					url: '/apps/analytics/customers',
	// 					parentKey: 'apps-analytics',
	// 				},
	// 				{
	// 					key: 'analytic-reports',
	// 					label: 'Reports',
	// 					url: '/apps/analytics/reports',
	// 					parentKey: 'apps-analytics',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-crypto',
	// 			label: 'Crypto',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'crypto-exchange',
	// 					label: 'Exchange',
	// 					url: '/apps/crypto/exchange',
	// 					parentKey: 'apps-crypto',
	// 				},
	// 				{
	// 					key: 'crypto-wallet',
	// 					label: 'Wallet',
	// 					url: '/apps/crypto/wallet',
	// 					parentKey: 'apps-crypto',
	// 				},
	// 				{
	// 					key: 'crypto-news',
	// 					label: 'Crypto News',
	// 					url: '/apps/crypto/news',
	// 					parentKey: 'apps-crypto',
	// 				},
	// 				{
	// 					key: 'crypto-ico',
	// 					label: 'ICO List',
	// 					url: '/apps/crypto/ico',
	// 					parentKey: 'apps-crypto',
	// 				},
	// 				{
	// 					key: 'crypto-settings',
	// 					label: 'Settings',
	// 					url: '/apps/crypto/settings',
	// 					parentKey: 'apps-crypto',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-crm',
	// 			label: 'CRM',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'crm-contacts',
	// 					label: 'Contacts',
	// 					url: '/apps/crm/contacts',
	// 					parentKey: 'apps-crm',
	// 				},
	// 				{
	// 					key: 'crm-opportunities',
	// 					label: 'Opportunities',
	// 					url: '/apps/crm/opportunities',
	// 					parentKey: 'apps-crm',
	// 				},
	// 				{
	// 					key: 'crm-leads',
	// 					label: 'Leads',
	// 					url: '/apps/crm/leads',
	// 					parentKey: 'apps-crm',
	// 				},
	// 				{
	// 					key: 'crm-customers',
	// 					label: 'Customers',
	// 					url: '/apps/crm/customers',
	// 					parentKey: 'apps-crm',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-projects',
	// 			label: 'Projects',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'projects-clients',
	// 					label: 'Clients',
	// 					url: '/apps/projects/clients',
	// 					parentKey: 'apps-projects',
	// 				},
	// 				{
	// 					key: 'projects-team',
	// 					label: 'Team',
	// 					url: '/apps/projects/team',
	// 					parentKey: 'apps-projects',
	// 				},
	// 				{
	// 					key: 'projects-project',
	// 					label: 'Project',
	// 					url: '/apps/projects/project',
	// 					parentKey: 'apps-projects',
	// 				},
	// 				{
	// 					key: 'projects-task',
	// 					label: 'Task',
	// 					url: '/apps/projects/task',
	// 					parentKey: 'apps-projects',
	// 				},
	// 				{
	// 					key: 'projects-kanban-board',
	// 					label: 'Kanban Board',
	// 					url: '/apps/projects/kanban-board',
	// 					parentKey: 'apps-projects',
	// 				},
	// 				{
	// 					key: 'projects-chat',
	// 					label: 'Chat',
	// 					url: '/apps/projects/chat',
	// 					parentKey: 'apps-projects',
	// 				},
	// 				{
	// 					key: 'projects-users',
	// 					label: 'Users',
	// 					url: '/apps/projects/users',
	// 					parentKey: 'apps-projects',
	// 				},
	// 				{
	// 					key: 'projects-create',
	// 					label: 'Project Create',
	// 					url: '/apps/projects/create',
	// 					parentKey: 'apps-projects',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-ecommerce',
	// 			label: 'Ecommerce',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'ecommerce-products',
	// 					label: 'Products',
	// 					url: '/apps/ecommerce/products',
	// 					parentKey: 'apps-ecommerce',
	// 				},
	// 				{
	// 					key: 'ecommerce-product-list',
	// 					label: 'Product List',
	// 					url: '/apps/ecommerce/product-list',
	// 					parentKey: 'apps-ecommerce',
	// 				},
	// 				{
	// 					key: 'ecommerce-product-detail',
	// 					label: 'Product Detail',
	// 					url: '/apps/ecommerce/product-detail',
	// 					parentKey: 'apps-ecommerce',
	// 				},
	// 				{
	// 					key: 'ecommerce-cart',
	// 					label: 'Cart',
	// 					url: '/apps/ecommerce/cart',
	// 					parentKey: 'apps-ecommerce',
	// 				},
	// 				{
	// 					key: 'ecommerce-checkout',
	// 					label: 'Checkout',
	// 					url: '/apps/ecommerce/checkout',
	// 					parentKey: 'apps-ecommerce',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-helpdesk',
	// 			label: 'Helpdesk',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'helpdesk-tickets',
	// 					label: 'Tickets',
	// 					url: '/apps/helpdesk/tickets',
	// 					parentKey: 'apps-helpdesk',
	// 				},
	// 				{
	// 					key: 'helpdesk-reports',
	// 					label: 'Reports',
	// 					url: '/apps/helpdesk/reports',
	// 					parentKey: 'apps-helpdesk',
	// 				},
	// 				{
	// 					key: 'helpdesk-agents',
	// 					label: 'Agents',
	// 					url: '/apps/helpdesk/agents',
	// 					parentKey: 'apps-helpdesk',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-hospital',
	// 			label: 'Hospital',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'hospital-appointments',
	// 					label: 'Appointments',
	// 					isTitle: false,
	// 					parentKey: 'apps-hospital',
	// 					children: [
	// 						{
	// 							key: 'hospital-appointments-schedule',
	// 							label: 'Dr. Schedule',
	// 							url: '/apps/hospital/appointments/schedule',
	// 							parentKey: 'hospital-appointments',
	// 						},
	// 						{
	// 							key: 'hospital-appointments-all',
	// 							label: 'All Appointments',
	// 							url: '/apps/hospital/appointments/all',
	// 							parentKey: 'hospital-appointments',
	// 						},
	// 					],
	// 				},
	// 				{
	// 					key: 'hospital-doctors',
	// 					label: 'Doctors',
	// 					isTitle: false,
	// 					parentKey: 'apps-hospital',
	// 					children: [
	// 						{
	// 							key: 'hospital-doctors-all',
	// 							label: 'All Doctors',
	// 							url: '/apps/hospital/doctors/all',
	// 							parentKey: 'hospital-doctors',
	// 						},
	// 						{
	// 							key: 'hospital-doctors-add',
	// 							label: 'Add Doctor',
	// 							url: '/apps/hospital/doctors/add',
	// 							parentKey: 'hospital-doctors',
	// 						},
	// 						{
	// 							key: 'hospital-doctors-edit',
	// 							label: 'Doctor Edit',
	// 							url: '/apps/hospital/doctors/edit',
	// 							parentKey: 'hospital-doctors',
	// 						},
	// 						{
	// 							key: 'hospital-doctors-profile',
	// 							label: 'Doctor Profile',
	// 							url: '/apps/hospital/doctors/profile',
	// 							parentKey: 'hospital-doctors',
	// 						},
	// 					],
	// 				},
	// 				{
	// 					key: 'hospital-patients',
	// 					label: 'Patients',
	// 					isTitle: false,
	// 					parentKey: 'apps-hospital',
	// 					children: [
	// 						{
	// 							key: 'hospital-patients-all',
	// 							label: 'All Patients',
	// 							url: '/apps/hospital/patients/all',
	// 							parentKey: 'hospital-patients',
	// 						},
	// 						{
	// 							key: 'hospital-patients-add',
	// 							label: 'Add Patient',
	// 							url: '/apps/hospital/patients/add',
	// 							parentKey: 'hospital-patients',
	// 						},
	// 						{
	// 							key: 'hospital-patients-edit',
	// 							label: 'Patient Edit',
	// 							url: '/apps/hospital/patients/edit',
	// 							parentKey: 'hospital-patients',
	// 						},
	// 						{
	// 							key: 'hospital-patients-profile',
	// 							label: 'Patient Profile',
	// 							url: '/apps/hospital/patients/profile',
	// 							parentKey: 'hospital-patients',
	// 						},
	// 					],
	// 				},
	// 				{
	// 					key: 'hospital-payments',
	// 					label: 'Payments',
	// 					isTitle: false,
	// 					parentKey: 'apps-hospital',
	// 					children: [
	// 						{
	// 							key: 'hospital-payments-all',
	// 							label: 'All Payments',
	// 							url: '/apps/hospital/payments/all',
	// 							parentKey: 'hospital-payments',
	// 						},
	// 						{
	// 							key: 'hospital-payments-invoice',
	// 							label: 'Payment Invoice',
	// 							url: '/apps/hospital/payments/invoice',
	// 							parentKey: 'hospital-payments',
	// 						},
	// 						{
	// 							key: 'hospital-payments-cashless',
	// 							label: 'Cashless Payments',
	// 							url: '/apps/hospital/payments/cashless',
	// 							parentKey: 'hospital-payments',
	// 						},
	// 					],
	// 				},
	// 				{
	// 					key: 'hospital-staff',
	// 					label: 'Staff',
	// 					isTitle: false,
	// 					parentKey: 'apps-hospital',
	// 					children: [
	// 						{
	// 							key: 'hospital-staff-all',
	// 							label: 'All Staff',
	// 							url: '/apps/hospital/staff/all',
	// 							parentKey: 'hospital-staff',
	// 						},
	// 						{
	// 							key: 'hospital-staff-add',
	// 							label: 'Add Member',
	// 							url: '/apps/hospital/staff/add',
	// 							parentKey: 'hospital-staff',
	// 						},
	// 						{
	// 							key: 'hospital-staff-edit',
	// 							label: 'Edit Member',
	// 							url: '/apps/hospital/staff/edit',
	// 							parentKey: 'hospital-staff',
	// 						},
	// 						{
	// 							key: 'hospital-staff-profile',
	// 							label: 'Member Profile',
	// 							url: '/apps/hospital/staff/profile',
	// 							parentKey: 'hospital-staff',
	// 						},
	// 						{
	// 							key: 'hospital-staff-salary',
	// 							label: 'Staff Salary',
	// 							url: '/apps/hospital/staff/salary',
	// 							parentKey: 'hospital-staff',
	// 						},
	// 					],
	// 				},
	// 				{
	// 					key: 'hospital-general',
	// 					label: 'General',
	// 					isTitle: false,
	// 					parentKey: 'apps-hospital',
	// 					children: [
	// 						{
	// 							key: 'hospital-general-rooms',
	// 							label: 'Room Allotments',
	// 							url: '/apps/hospital/general/rooms',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-expenses',
	// 							label: 'Expenses Report',
	// 							url: '/apps/hospital/general/expenses',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-departments',
	// 							label: 'Departments',
	// 							url: '/apps/hospital/general/departments',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-insurance-company',
	// 							label: 'Insurance Co.',
	// 							url: '/apps/hospital/general/insurance-company',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-events',
	// 							label: 'Events',
	// 							url: '/apps/hospital/general/events',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-leaves',
	// 							label: 'Leaves',
	// 							url: '/apps/hospital/general/leaves',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-holidays',
	// 							label: 'Holidays',
	// 							url: '/apps/hospital/general/holidays',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-attendance',
	// 							label: 'Attendance',
	// 							url: '/apps/hospital/general/attendance',
	// 							parentKey: 'hospital-general',
	// 						},
	// 						{
	// 							key: 'hospital-general-chat',
	// 							label: 'Chat',
	// 							url: '/apps/hospital/general/chat',
	// 							parentKey: 'hospital-general',
	// 						},
	// 					],
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-email',
	// 			label: 'Email',
	// 			isTitle: false,
	// 			parentKey: 'apps',
	// 			children: [
	// 				{
	// 					key: 'email-inbox',
	// 					label: 'Inbox',
	// 					url: '/apps/email/inbox',
	// 					parentKey: 'apps-email',
	// 				},
	// 				{
	// 					key: 'email-read',
	// 					label: 'Read Email',
	// 					url: '/apps/email/read',
	// 					parentKey: 'apps-email',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'apps-chat',
	// 			label: 'Chat',
	// 			url: '/apps/chat',
	// 			parentKey: 'apps',
	// 		},
	// 		{
	// 			key: 'apps-contact-list',
	// 			label: 'Contact List',
	// 			url: '/apps/contact-list',
	// 			parentKey: 'apps',
	// 		},
	// 		{
	// 			key: 'apps-calendar',
	// 			label: 'Calendar',
	// 			url: '/apps/calendar',
	// 			parentKey: 'apps',
	// 		},
	// 		{
	// 			key: 'apps-invoice',
	// 			label: 'Invoice',
	// 			url: '/apps/invoice',
	// 			parentKey: 'apps',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'ui',
	// 	icon: 'planet',
	// 	label: 'UI Kit',
	// 	isTitle: true,
	// 	children: [
	// 		{
	// 			key: 'ui-elements',
	// 			label: 'UI Elements',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'elements-alerts',
	// 					label: 'Alerts',
	// 					url: '/ui/elements/alerts',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-avatars',
	// 					label: 'Avatars',
	// 					url: '/ui/elements/avatars',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-buttons',
	// 					label: 'Buttons',
	// 					url: '/ui/elements/buttons',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-badges',
	// 					label: 'Badges',
	// 					url: '/ui/elements/badges',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-cards',
	// 					label: 'Cards',
	// 					url: '/ui/elements/cards',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-carousels',
	// 					label: 'Carousels',
	// 					url: '/ui/elements/carousels',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-dropdowns',
	// 					label: 'Dropdowns',
	// 					url: '/ui/elements/dropdowns',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-grid',
	// 					label: 'Grids',
	// 					url: '/ui/elements/grid',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-images',
	// 					label: 'Images',
	// 					url: '/ui/elements/images',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-list',
	// 					label: 'List',
	// 					url: '/ui/elements/list',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-modals',
	// 					label: 'Modals',
	// 					url: '/ui/elements/modals',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-nav',
	// 					label: 'Navs',
	// 					url: '/ui/elements/navs',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-navbar',
	// 					label: 'Navbar',
	// 					url: '/ui/elements/navbar',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-paginations',
	// 					label: 'Paginations',
	// 					url: '/ui/elements/paginations',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-popover-tooltip',
	// 					label: 'Popover & Tooltips',
	// 					url: '/ui/elements/popover-tooltips',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-progress',
	// 					label: 'Progress',
	// 					url: '/ui/elements/progress',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-spinners',
	// 					label: 'Spinners',
	// 					url: '/ui/elements/spinners',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-tabs-accordions',
	// 					label: 'Tabs & Accordions',
	// 					url: '/ui/elements/tabs-accordions',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-typography',
	// 					label: 'Typography',
	// 					url: '/ui/elements/typography',
	// 					parentKey: 'ui-elements',
	// 				},
	// 				{
	// 					key: 'elements-videos',
	// 					label: 'Videos',
	// 					url: '/ui/elements/videos',
	// 					parentKey: 'ui-elements',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'ui-advanced',
	// 			label: 'Advanced UI',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'advanced-animation',
	// 					label: 'Animation',
	// 					url: '/ui/advanced/animation',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-clip-board',
	// 					label: 'Clip Board',
	// 					url: '/ui/advanced/clip-board',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-dragula',
	// 					label: 'Dragula',
	// 					url: '/ui/advanced/dragula',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-file-manager',
	// 					label: 'File Manager',
	// 					url: '/ui/advanced/file-manager',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-highlight',
	// 					label: 'Highlight',
	// 					url: '/ui/advanced/highlight',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-range-slider',
	// 					label: 'Range Slider',
	// 					url: '/ui/advanced/range-slider',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-ratings',
	// 					label: 'Ratings',
	// 					url: '/ui/advanced/ratings',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-ribbons',
	// 					label: 'Ribbons',
	// 					url: '/ui/advanced/ribbons',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-sweet-alerts',
	// 					label: 'Sweet Alerts',
	// 					url: '/ui/advanced/sweet-alerts',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 				{
	// 					key: 'advanced-toasts',
	// 					label: 'Toasts',
	// 					url: '/ui/advanced/toasts',
	// 					parentKey: 'ui-advanced',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'ui-forms',
	// 			label: 'Forms',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'forms-elements',
	// 					label: 'Basic Elements',
	// 					url: '/ui/forms/elements',
	// 					parentKey: 'ui-forms',
	// 				},
	// 				{
	// 					key: 'forms-advance',
	// 					label: 'Advance Elements',
	// 					url: '/ui/forms/advance',
	// 					parentKey: 'ui-forms',
	// 				},
	// 				{
	// 					key: 'forms-validation',
	// 					label: 'Validation',
	// 					url: '/ui/forms/validation',
	// 					parentKey: 'ui-forms',
	// 				},
	// 				{
	// 					key: 'forms-wizard',
	// 					label: 'Wizard',
	// 					url: '/ui/forms/wizard',
	// 					parentKey: 'ui-forms',
	// 				},
	// 				{
	// 					key: 'forms-editors',
	// 					label: 'Editors',
	// 					url: '/ui/forms/editors',
	// 					parentKey: 'ui-forms',
	// 				},
	// 				{
	// 					key: 'forms-file-upload',
	// 					label: 'File Upload',
	// 					url: '/ui/forms/file-upload',
	// 					parentKey: 'ui-forms',
	// 				},
	// 				{
	// 					key: 'forms-image-crop',
	// 					label: 'Image Crop',
	// 					url: '/ui/forms/image-crop',
	// 					parentKey: 'ui-forms',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'ui-charts',
	// 			label: 'Charts',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'charts-apex',
	// 					label: 'Apex',
	// 					url: '/ui/charts/apex',
	// 					parentKey: 'ui-charts',
	// 				},
	// 				{
	// 					key: 'charts-justgage',
	// 					label: 'JustGage',
	// 					url: '/ui/charts/justgage',
	// 					parentKey: 'ui-charts',
	// 				},
	// 				{
	// 					key: 'charts-chartjs',
	// 					label: 'ChartjS',
	// 					url: '/ui/charts/chartjs',
	// 					parentKey: 'ui-charts',
	// 				},
	// 				{
	// 					key: 'charts-toast',
	// 					label: 'Toast',
	// 					url: '/ui/charts/toast',
	// 					parentKey: 'ui-charts',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'ui-tables',
	// 			label: 'Tables',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'tables-basic',
	// 					label: 'Basic',
	// 					url: '/ui/tables/basic',
	// 					parentKey: 'ui-tables',
	// 				},
	// 				{
	// 					key: 'tables-data-tables',
	// 					label: 'Data Tables',
	// 					url: '/ui/tables/data',
	// 					parentKey: 'ui-tables',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'ui-icons',
	// 			label: 'Icons',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'icons-md',
	// 					label: 'Material Design',
	// 					url: '/ui/icons/md',
	// 					parentKey: 'ui-icons',
	// 				},
	// 				{
	// 					key: 'icons-fa',
	// 					label: 'Font Awesome',
	// 					url: '/ui/icons/fa',
	// 					parentKey: 'ui-icons',
	// 				},
	// 				{
	// 					key: 'icons-tb',
	// 					label: 'Tabler',
	// 					url: '/ui/icons/tb',
	// 					parentKey: 'ui-icons',
	// 				},
	// 				{
	// 					key: 'icons-feather',
	// 					label: 'Feather',
	// 					url: '/ui/icons/feather',
	// 					parentKey: 'ui-icons',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'ui-maps',
	// 			label: 'Maps',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'maps-google',
	// 					label: 'Google Maps',
	// 					url: '/ui/maps/google',
	// 					parentKey: 'ui-maps',
	// 				},
	// 				{
	// 					key: 'maps-leaflet',
	// 					label: 'Leaflet Maps',
	// 					url: '/ui/maps/leaflet',
	// 					parentKey: 'ui-maps',
	// 				},
	// 				{
	// 					key: 'maps-vector',
	// 					label: 'Vector Maps',
	// 					url: '/ui/maps/vector',
	// 					parentKey: 'ui-maps',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'ui-email-templates',
	// 			label: 'Email Templates',
	// 			isTitle: false,
	// 			parentKey: 'ui',
	// 			children: [
	// 				{
	// 					key: 'email-templates-basic',
	// 					label: 'Basic Action Email',
	// 					url: '/ui/email-templates/basic',
	// 					parentKey: 'ui-email-templates',
	// 				},
	// 				{
	// 					key: 'email-templates-alert',
	// 					label: 'Alert Email',
	// 					url: '/ui/email-templates/alert',
	// 					parentKey: 'ui-email-templates',
	// 				},
	// 				{
	// 					key: 'email-templates-billing',
	// 					label: 'Billing Email',
	// 					url: '/ui/email-templates/billing',
	// 					parentKey: 'ui-email-templates',
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	// {
	// 	key: 'pages',
	// 	icon: 'files',
	// 	label: 'Pages',
	// 	isTitle: true,
	// 	children: [
	// 		{
	// 			key: 'pages-profile',
	// 			label: 'Profile',
	// 			url: '/pages/profile',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-tour',
	// 			label: 'Tour',
	// 			url: '/pages/tour',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-timeline',
	// 			label: 'Timeline',
	// 			url: '/pages/timeline',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-tree-view',
	// 			label: 'Treeview',
	// 			url: '/pages/treeview',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-starter-page',
	// 			label: 'Starter Page',
	// 			url: '/pages/starter',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-pricing',
	// 			label: 'Pricing',
	// 			url: '/pages/pricing',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-blogs',
	// 			label: 'Blogs',
	// 			url: '/pages/blogs',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-faqs',
	// 			label: 'FAQs',
	// 			url: '/pages/faqs',
	// 			parentKey: 'pages',
	// 		},
	// 		{
	// 			key: 'pages-gallery',
	// 			label: 'Gallery',
	// 			url: '/pages/gallery',
	// 			parentKey: 'pages',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'auth',
	// 	icon: 'shield-lock',
	// 	label: 'Authentication',
	// 	isTitle: true,
	// 	children: [
	// 		{
	// 			key: 'auth-login',
	// 			label: 'Log In',
	// 			url: '/auth/login',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-login-alt',
	// 			label: 'Log In alt',
	// 			url: '/auth/login-alt',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-register',
	// 			label: 'Register',
	// 			url: '/auth/register',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-register-alt',
	// 			label: 'Register alt',
	// 			url: '/auth/register-alt',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-re-password',
	// 			label: 'Re Password',
	// 			url: '/auth/re-password',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-re-password-alt',
	// 			label: 'Re Password Alt',
	// 			url: '/auth/re-password-alt',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-lock-screen',
	// 			label: 'Lock Screen',
	// 			url: '/auth/lock-screen',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-lock-screen-alt',
	// 			label: 'Lock Screen alt',
	// 			url: '/auth/lock-screen-alt',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-error-404',
	// 			label: 'Error 404',
	// 			url: '/not-found',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-error-404-alt',
	// 			label: 'Error 404 alt',
	// 			url: '/not-found-alt',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-error-500',
	// 			label: 'Error 500',
	// 			url: '/error-500',
	// 			parentKey: 'auth',
	// 		},
	// 		{
	// 			key: 'auth-error-500-alt',
	// 			label: 'Error 500 alt',
	// 			url: '/error-500-alt',
	// 			parentKey: 'auth',
	// 		},
	// 	],
	// },
]
export { TWO_COl_MENU_ITEMS }
