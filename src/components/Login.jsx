import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with:", values);
      navigate("/dashboard");
    },
  });

  const formFields = [
    {
      name: "email",
      type: "email",
      placeholder: "eg: example123@gmail.com",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center p-10">
      <div className="flex w-full max-w-4xl rounded-lg">
        <div
          className="w-1/2 p-10 flex flex-col justify-between rounded-l-lg"
          style={{
            backgroundImage: `url('./src/assets/girl.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100%",
          }}
        >
          <div className="flex gap-2 items-center text-2xl font-bold text-black">
            <img className="w-5 h-5" src="./src/assets/lo.png" alt="logo" />
            React
          </div>
          <div className="text-white bg-opacity-50 p-4 rounded">
            <p className="text-3xl italic">
              "Empowering teams with the tools they deserve."
            </p>
            <p className="mt-4">
              Zeeke Sulker, Director of Digital Marketing Technology
            </p>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white p-8 shadow-lg w-full max-w-md rounded-r-lg"
          >
            <h2 className="text-3xl font-bold mb-2">Welcome back to React</h2>
            <p className="text-gray-600 mb-6">
              Build your design system effortlessly with our powerful component
              library.
            </p>

            <div className="space-y-4">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-700">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[field.name]}
                    className="w-full p-2 border rounded-lg"
                  />
                  {formik.touched[field.name] && formik.errors[field.name] && (
                    <div className="text-red-500 text-sm">
                      {formik.errors[field.name]}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  onChange={formik.handleChange}
                  checked={formik.values.remember}
                  className="mr-2"
                />
                <label className="text-gray-700">
                  Remember sign in details
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-3 rounded-full"
              >
                Log in
              </button>

              <div className="text-center text-gray-500 my-4">OR</div>

              <button className="w-full border p-3 rounded-lg flex items-center justify-center">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>

              <p className="text-center text-gray-600 mt-4">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-purple-600">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
