import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BaseInput from '../../components/base-input/BaseInput';
import BaseButton from '../../components/base-button/BaseButton';
import { UserEntity } from '../../components/entities/user.entity';

const SignUp = () => {
  const navigate = useNavigate();
  
  const businessTypes = [
    'Retail',
    'Wholesale',
    'Manufacturing',
    'Service',
    'Restaurant',
    'E-commerce',
    'Other'
  ];

  // Create a new UserEntity instance for initial values

  const formik = useFormik({
    initialValues: new UserEntity(),
    validationSchema: UserEntity.yupSignUpSchema(),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Add your signup logic here
        console.log('Form values:', values);
      } catch (error) {
        console.error('Signup error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto space-y-8 bg-white p-8 rounded-lg shadow-lg">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-black rounded-full flex items-center justify-center">
            <svg 
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Business Management Hub
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Manage your business inventory, sales, and expenses
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Demo: Use admin@businesshub.com for admin access
          </p>
        </div>

        {/* Login/Sign Up Toggle */}
        <div className="bg-gray-100 rounded-md p-1 flex">
          <button 
            onClick={() => navigate('/login')}
            type="button"
            className="flex-1 py-2 px-4 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Login
          </button>
          <button 
            type="button"
            className="flex-1 py-2 px-4 rounded-md bg-white shadow-sm text-sm font-medium text-gray-900"
          >
            Sign Up
          </button>
        </div>

        {/* Sign Up Form */}
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <BaseInput
              name="full_name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.full_name && formik.errors.full_name}
              touched={formik.touched.full_name}
              required
              icon={<PersonOutlineOutlinedIcon className="h-5 w-5" />}
            />

            <BaseInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
              touched={formik.touched.email}
              required
              icon={<EmailOutlinedIcon className="h-5 w-5" />}
            />

            <BaseInput
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
              touched={formik.touched.password}
              required
              icon={<LockOutlinedIcon className="h-5 w-5" />}
            />

            {/* Business Name Field */}
            <BaseInput
              name="business_name"
              label="Business Name"
              type="text"
              placeholder="Enter your business name"
              value={formik.values.business_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.business_name && formik.errors.business_name}
              touched={formik.touched.business_name}
              required
              icon={<BusinessOutlinedIcon className="h-5 w-5" />}
            />

            {/* Business Type Field */}
            <BaseInput
              name="business_type"
              label="Business Type"
              type="select"
              value={formik.values.business_type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.business_type && formik.errors.business_type}
              touched={formik.touched.business_type}
              required
              icon={<CategoryOutlinedIcon className="h-5 w-5" />}
              options={[
                { value: "", label: "Select business type" },
                ...businessTypes.map((type) => ({
                  value: type,
                  label: type
                }))
              ]}
            />
          </div>

          <div>
            <BaseButton
              type="submit"
              disabled={formik.isSubmitting}
              isLoading={formik.isSubmitting}
              label={formik.isSubmitting ? 'Creating Account...' : 'Create Account'}
              fullWidth
              style={{ 
                backgroundColor: '#000000',
                color: '#ffffff'
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;