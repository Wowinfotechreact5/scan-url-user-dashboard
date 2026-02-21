import { useState } from "react";
import {
      Eye,
      EyeOff,
      LogIn,
      Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Gemini_Ge.png'
export default function LoginPage() {

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
      const [verified, setVerified] = useState(false);
      const [remember, setRemember] = useState(false);
      const navigate = useNavigate()

      const handleLogin = () => {

            if (!email || !password || !verified) return;

            console.log({
                  email,
                  password,
                  remember
            });
            navigate('/')

      };


      return (

            <div className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-b from-gray-50 to-gray-100
      p-6
    ">


                  {/* Login Card */}
                  <div className="
        w-full max-w-md
        bg-white
        border border-gray-100
        rounded-xl
        shadow-sm
        p-8
      ">


                        {/* Logo */}
                        <div className="mb-6 text-center flex flex-col items-center">

                              {/* Logo */}
                              <div className="mb-6 text-center flex flex-col items-center">

                                    {/* Logo */}

                                    {/* Brand name (optional) */}
                                    <div className=" flex justify-center">

                                          <img
                                                src={logo}
                                                alt="ScanUrl Logo"
                                                className="h-16 w-auto object-contain"
                                          />

                                    </div>
                                    <h1 className="text-2xl font-semibold">

                                          <span className="text-orange-500">Scan</span>
                                          <span className="text-gray-800">Url</span>

                                    </h1>

                                    <p className="text-sm text-gray-500 mt-1">
                                          Sign in to your account
                                    </p>
                              </div>

                              {/* Brand name (optional) */}


                        </div>



                        {/* Email */}
                        <div className="mb-4">

                              <label className="text-sm text-gray-600 block mb-1">
                                    Email address
                              </label>

                              <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
              w-full px-4 py-2.5 text-sm
              border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-orange-400
            "
                              />

                        </div>



                        {/* Password */}
                        <div className="mb-4">

                              <label className="text-sm text-gray-600 block mb-1">
                                    Password
                              </label>

                              <div className="relative">

                                    <input
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          type={showPassword ? "text" : "password"}
                                          placeholder="Enter your password"
                                          className="
                w-full px-4 py-2.5 text-sm
                border border-gray-200 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-orange-400
              "
                                    />

                                    <button
                                          type="button"
                                          onClick={() =>
                                                setShowPassword(!showPassword)
                                          }
                                          className="
                absolute right-3 top-1/2 -translate-y-1/2
                text-gray-400 hover:text-gray-600
              "
                                    >

                                          {showPassword
                                                ? <EyeOff size={18} />
                                                : <Eye size={18} />
                                          }

                                    </button>

                              </div>

                        </div>



                        {/* Remember + Forgot */}
                        <div className="
          flex justify-between items-center
          mb-4 text-sm
        ">

                              <label className="flex items-center gap-2 text-gray-600">

                                    <input
                                          type="checkbox"
                                          checked={remember}
                                          onChange={() =>
                                                setRemember(!remember)
                                          }
                                    />

                                    Remember me

                              </label>


                              <button className="
            text-orange-600 hover:text-orange-700
          ">
                                    Forgot password?
                              </button>

                        </div>



                        {/* Human Verification */}
                        <div
                              onClick={() => setVerified(!verified)}
                              className="
            flex items-center justify-between
            border border-gray-200
            rounded-lg px-4 py-3
            cursor-pointer hover:border-orange-400
            mb-5
          "
                        >

                              <div className="flex items-center gap-3">

                                    <div className={`
              w-5 h-5 rounded border flex items-center justify-center
              ${verified
                                                ? "bg-green-500 border-green-500 text-white"
                                                : "border-gray-300"
                                          }
            `}>

                                          {verified && <Check size={14} />}

                                    </div>

                                    <span className="text-sm text-gray-700">
                                          I am human
                                    </span>

                              </div>


                              <div className="
            w-6 h-6 bg-orange-100 text-orange-500
            rounded-full flex items-center justify-center
          ">
                                    ✓
                              </div>

                        </div>



                        {/* Login Button */}
                        <button
                              onClick={handleLogin}
                              disabled={!email || !password || !verified}
                              className={`
            w-full flex items-center justify-center gap-2
            py-2.5 rounded-lg text-sm font-medium
            transition-all
            ${email && password && verified
                                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }
          `}
                        >

                              <LogIn size={18} />

                              Sign In

                        </button>



                        {/* Footer */}



                  </div>


            </div>

      );

}