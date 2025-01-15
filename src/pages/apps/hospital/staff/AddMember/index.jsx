import {
	FormTextInput,
	PageBreadcrumb,
	SelectInput,
	TextAreaInput,
} from '@/components'
import userVector from '@/assets/images/users/user-vector.png'
import {
	Button,
	Card,
	CardBody,
	Col,
	Form,
	FormGroup,
	Row,
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
const AddMember = () => {
	/*
	 * form validation schema
	 */
	const FormSchema = yup.object({
		image: yup.string().required('Please add image'),
		firstName: yup.string().required('Please enter first name'),
		lastName: yup.string().required('Please enter last name'),
		joinDate: yup
			.string()
			.matches(
				/(0[1-9]|[1,2][0-9]|3[0,1])\/(0[1-9]|1[1,2])\/(20)\d{2}/,
				'Invalid date, Keep format dd/mm/yyyy'
			)
			.required('Please enter join date'),
		post: yup.string().required('Please enter post'),
		gender: yup.string().required('Please select gender'),
		age: yup
			.string()
			.matches(/^\S[1-9]{0,1}$/, 'Age must be less than 100')
			.required('Please enter age'),
		email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Please enter email'),
		phoneNo: yup
			.string()
			.matches(/^\d{3}[\s\-\.]?\d{3}[\s\-\.]?\d{4}$/, 'Invalid phone number')
			.required('Please enter phone number'),
		memberID: yup.string().required('Please enter member id'),
		salary: yup.string().required('Please enter salary'),
		aboutMe: yup.string().required('Please enter about details'),
	})
	const {
		control,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(FormSchema),
	})

	/*
	 * handle form submission
	 */
	const onSubmitEvent = () => {
		reset()
	}

	/*
	 * handle Image Change
	 */
	const [selectedImage, setSelectedImage] = useState()
	const handleImageChange = (event) => {
		const file = event.target.files[0]
		const reader = new FileReader()
		reader.onload = (e) => {
			setValue('image', e.target.result)
			setSelectedImage(e.target.result)
		}
		reader.readAsDataURL(file)
	}
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Add Member" />
			<Row>
				<Col xs="12" lg="8" className="mx-auto">
					<Card>
						<CardBody>
							<Form onSubmit={handleSubmit(onSubmitEvent)}>
								<FormGroup className="mb-3">
									<img
										src={selectedImage || userVector}
										alt="user-vector"
										className="thumb-lg rounded me-2"
									/>
									<label
										className="btn btn-de-primary btn-sm text-light"
										onChange={handleImageChange}
									>
										Add Avatar <input type="file" hidden />
									</label>
									{errors.image && (
										<span className="text-danger">{errors.image?.message}</span>
									)}
								</FormGroup>
								<Row className="form-group">
									<FormTextInput
										name="firstName"
										placeholder="First Name"
										control={control}
										containerClass="col-md-6 mb-3"
									/>

									<FormTextInput
										name="lastName"
										placeholder="Last Name"
										control={control}
										containerClass="col-md-6 mb-3"
									/>
								</Row>
								<Row className="form-group">
									<FormTextInput
										name="joinDate"
										placeholder="Join Date"
										control={control}
										containerClass="col-md-3 mb-3"
									/>
									<FormTextInput
										name="post"
										placeholder="Post"
										control={control}
										containerClass="col-md-3 mb-3"
									/>
									<SelectInput
										name="gender"
										control={control}
										containerClass="col-md-3 mb-3"
									>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</SelectInput>
									<FormTextInput
										name="age"
										placeholder="Age"
										control={control}
										containerClass="col-md-3 mb-3"
									/>
								</Row>
								<Row className="form-group">
									<FormTextInput
										name="email"
										placeholder="Email"
										control={control}
										containerClass="col-md-6 mb-3"
									/>
									<FormTextInput
										name="phoneNo"
										placeholder="Phone No"
										control={control}
										containerClass="col-md-2 mb-3"
									/>
									<FormTextInput
										name="memberID"
										placeholder="ID"
										control={control}
										containerClass="col-md-2 mb-3"
									/>
									<FormTextInput
										name="salary"
										placeholder="Salary"
										control={control}
										containerClass="col-md-2 mb-3"
									/>
								</Row>
								<FormGroup>
									<TextAreaInput
										as="textarea"
										rows={5}
										placeholder="About Me..."
										name="aboutMe"
										control={control}
									/>
									<Button
										type="submit"
										size="sm"
										variant="de-primary"
										className="text-light px-4 mt-3 mb-0 me-1"
									>
										Save
									</Button>
									<Button
										type="button"
										size="sm"
										variant="de-danger"
										className="text-light px-4 mt-3 mb-0"
									>
										Cancel
									</Button>
								</FormGroup>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}
export default AddMember
