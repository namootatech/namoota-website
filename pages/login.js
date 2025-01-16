'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  login,
  signUpWithEmail,
  loginWithGoogle,
  signupWithGoogle,
} from '@/util/auth/auth';
import { industryList } from '@/config/companies';
import { useRouter } from 'next/router';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    cellphoneNumber: '',
    company: {
      name: '',
      website: '',
      industry: '',
      subCategory: '',
      customIndustry: '',
      customSubCategory: '',
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormChange = (field, value) => {
    console.log('field', field);
    console.log('value', value);
    setFormData((prevData) => {
      if (field.startsWith('company.')) {
        const companyField = field.split('.')[1];
        return {
          ...prevData,
          company: { ...prevData.company, [companyField]: value },
        };
      }
      return { ...prevData, [field]: value };
    });
  };

  const handleSubmit = async (action) => {
    e.preventDefault();

    try {
      if (action === 'login') {
        console.log('Login', login);
        await login(formData.email, formData.password);
        console.log('Registration successful', action);
        router.push('/app');
      } else if (action === 'register') {
        await signUpWithEmail(formData);
        console.log('Registration successful', action);
        router.push('/app');
      }
    } catch (error) {
      console.error(`Error during ${action}:`, error);
    }
  };

  const handleGoogleAuth = async (action) => {
    try {
      if (action === 'login') {
        await loginWithGoogle();
        console.log('Google login successful');
        console.log('goog Registration successful');
      } else if (action === 'register') {
        await signupWithGoogle();
        console.log('Google registration successful');
        console.log('goog Registration successful');
      }
    } catch (error) {
      console.error(`Error during Google ${action}:`, error);
    }
  };

  const selectedIndustry = industryList.find(
    (industry) => industry.id === formData.company.industry
  );
  console.log(formData);
  console.log('id', formData.company.industry);
  console.log('selectedIndustry', selectedIndustry);
  const subCategories = selectedIndustry?.subCategories || [];

  return (
    <div className='flex transition-all ease-in-out flex-col gap-6 items-center justify-start min-h-screen bg-gray-50'>
      <h3 className='text-2xl font-semibold text-gray-800 mt-8'>
        Project Portal
      </h3>
      <p className='text-gray-600 mb-8'>
        Start, Manage and Collaborate on projects with Namoota
      </p>
      <Card className='w-[400px] bg-white'>
        <CardHeader className='bg-gray-100 text-gray-800 rounded-t-lg transition-all ease-in-out'>
          <CardTitle>{isLogin ? 'Login' : 'Register'}</CardTitle>
          <CardDescription>
            {isLogin
              ? 'Enter your credentials to login'
              : 'Create an account to get started'}
          </CardDescription>
        </CardHeader>
        <CardContent className='pt-6'>
          <Tabs
            defaultValue='login'
            onValueChange={(value) => setIsLogin(value === 'login')}
          >
            <TabsList className='grid w-full grid-cols-2 bg-sky-100 transition-all ease-in-out'>
              <TabsTrigger
                value='login'
                className='data-[state=active]:bg-sky-300 data-[state=active]:text-white py-1'
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value='register'
                className='data-[state=active]:bg-sky-500 data-[state=active]:text-white'
              >
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value='login'>
              <form className='space-y-4 transition-all ease-in-out'>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                    className=' focus:border-sky-500'
                    onChange={(e) => handleFormChange('email', e.target.value)}
                  />
                </div>
                <div className='space-y-2 relative'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    required
                    className=' focus:border-sky-500 pr-10'
                    onChange={(e) =>
                      handleFormChange('password', e.target.value)
                    }
                  />
                  <button
                    type='button'
                    className='absolute top-5 inset-y-0 right-3 flex items-center text-gray-500'
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <Button
                  type='button'
                  className='w-full bg-sky-600 hover:bg-sky-700 text-white'
                  onClick={() => handleSubmit('login')}
                >
                  Login
                </Button>
              </form>
            </TabsContent>
            <TabsContent value='register'>
              <form className='space-y-4 transition-all ease-in-out duration-5'>
                <div className='space-y-2'>
                  <Label htmlFor='displayName'>Name</Label>
                  <Input
                    id='displayName'
                    placeholder='John Doe'
                    required
                    className=' focus:border-sky-500'
                    onChange={(e) =>
                      handleFormChange('displayName', e.target.value)
                    }
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                    className=' focus:border-sky-500'
                    onChange={(e) => handleFormChange('email', e.target.value)}
                  />
                </div>
                <div className='space-y-2 relative'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    required
                    className=' focus:border-sky-500 pr-10'
                    onChange={(e) =>
                      handleFormChange('password', e.target.value)
                    }
                  />
                  <button
                    type='button'
                    className='absolute top-5 inset-y-0 right-3 flex items-center text-gray-500'
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='phoneNumber'>Cellphone Number</Label>
                  <Input
                    id='phoneNumber'
                    placeholder='+27101234567'
                    required
                    className=' focus:border-sky-500'
                    onChange={(e) =>
                      handleFormChange('phoneNUmber', e.target.value)
                    }
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='companyName'>Company Name</Label>
                  <Input
                    id='companyName'
                    placeholder='Company Inc.'
                    onChange={(e) =>
                      handleFormChange('company.name', e.target.value)
                    }
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='website'>Website</Label>
                  <Input
                    id='website'
                    placeholder='https://company.com'
                    onChange={(e) =>
                      handleFormChange('company.website', e.target.value)
                    }
                  />
                </div>
                <div className='space-y-4'>
                  {/* Industry Select */}
                  <div className='space-y-2'>
                    <Label htmlFor='industry'>Industry</Label>
                    <select
                      id='industry'
                      required
                      className='w-full border p-2  focus:border-sky-500 rounded-md text-sm'
                      onChange={(e) => {
                        handleFormChange('company.industry', e.target.value);
                      }}
                    >
                      <option value=''>Select Industry</option>
                      {industryList.map((industry) => (
                        <option key={industry.id} value={industry.id}>
                          {industry.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Custom Industry Input (only if "Other" is selected) */}
                  {formData.industry === 'other' && (
                    <div className='space-y-2'>
                      <Label htmlFor='customIndustry'>Custom Industry</Label>
                      <Input
                        id='customIndustry'
                        placeholder='Enter your industry'
                        required
                        className=' focus:border-sky-500'
                        onChange={(e) =>
                          handleFormChange(
                            'company.customIndustry',
                            e.target.value
                          )
                        }
                      />
                    </div>
                  )}

                  {/* Sub-Category Select */}
                  {subCategories.length > 0 && formData.company.industry && (
                    <div className='space-y-2'>
                      <Label htmlFor='subCategory'>Sub-Category</Label>
                      <select
                        id='subCategory'
                        required
                        className='w-full border p-2  focus:border-sky-500 rounded-md text-sm'
                        onChange={(e) =>
                          handleFormChange(
                            'company.subCategory',
                            e.target.value
                          )
                        }
                      >
                        <option value=''>Select Sub-Category</option>
                        {subCategories.map((subCategory) => (
                          <option key={subCategory} value={subCategory}>
                            {subCategory}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Custom Sub-Category Input (only if "Other" is selected for industry or no sub-categories exist) */}
                  {(formData.company.industry === 'other' ||
                    subCategories.length === 0) && (
                    <div className='space-y-2'>
                      <Label htmlFor='customSubCategory'>
                        Custom Sub-Category
                      </Label>
                      <Input
                        id='customSubCategory'
                        placeholder='Enter your sub-category'
                        className=' focus:border-sky-500'
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customSubCategory: e.target.value,
                          })
                        }
                      />
                    </div>
                  )}
                </div>

                <Button
                  type='button'
                  className='w-full bg-sky-600 hover:bg-sky-700 text-white'
                  onClick={() => handleSubmit('register')}
                >
                  Register
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className='flex flex-col space-y-2'>
          <Button
            variant='outline'
            onClick={() => handleGoogleAuth(isLogin ? 'login' : 'register')}
            className='w-full border-sky-600 text-sky-600 hover:bg-sky-50'
          >
            {isLogin ? 'Login' : 'Register'} with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
