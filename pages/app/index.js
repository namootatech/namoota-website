import { Bell, ChevronDown, Menu, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { addProject, getUserProjects, getProject } from '@/util/projects';
import { useAuth } from '@/util/auth/context';
import FeatureSurvey from '@/components/featureSurvey';
import { useState, useEffect } from 'react';
import { flatten, values } from 'ramda';

export default function AppDashboard() {
  const { currentUser } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    deadline: '',
    mission: '',
    survey: {},
    status: 'pending-review',
    type: '',
    tags: '',
    userId: currentUser?.uid,
  });
  const [showSurvey, setShowSurvey] = useState(false);

  async function getProjects() {
    console.log('Getting user projects');
    const data = await getUserProjects(currentUser.uid);
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, [currentUser]);

  const handleInputChange = (field, value) => {
    setProjectDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = () => {
    setShowSurvey(true);
  };

  const handleSaveFeatures = async (features) => {
    console.log('Handle save features', features);
    const updatedProject = {
      ...projectDetails,
      survey: features,
      userId: currentUser.uid,
      lastUpdated: new Date(),
      lastUpdatedBy: currentUser.uid,
    };
    try {
      console.log('...addiing');
      await addProject(updatedProject); // Assuming `addProject` handles saving to the backend
      setShowSurvey(false);
      setShowForm(false);
      setProjectDetails({
        title: '',
        description: '',
        deadline: '',
        mission: '',
        survey: {},
        type: '',
        tags: '',
      });
      setError(null);
      getProjects();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const totalProjects = projects.length;
  const totalActiveProjects = projects.filter(
    (p) => p.status === 'in-development'
  ).length;
  return (
    <div className='container mx-auto px-6 py-8'>
      <div className='flex gap-4 items-center justify-between w-full'>
        <h3 className='text-gray-700 text-3xl font-medium'>Dashboard</h3>
        <div className='flex gap-4 items-center'>
          <Input
            type='text'
            placeholder='Search for projects'
            icon={<Search />}
            className='w-72 border-gray-300 border-solid'
          />
          <Button
            className='bg-sky-500 text-white p-4 flex items-center justify-center'
            onClick={() => setShowForm(true)}
          >
            New Project +
          </Button>
        </div>
      </div>
      {showForm && !showSurvey && (
        <div className='my-12 flex flex-col justify-center items-center gap-4 w-full'>
          <h2 className='text-gray-500 text-lg'>Step 1</h2>
          <h2 className='text-xl text-cyan-800 font-bold'>Details Form</h2>
          <Card className='w-3/4'>
            <CardHeader>
              <CardTitle>New Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-4'>
                    <Label>Project Name</Label>
                    <Input
                      type='text'
                      placeholder='Project Name'
                      value={projectDetails.name}
                      onChange={(e) =>
                        handleInputChange('title', e.target.value)
                      }
                    />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <Label>Deadline</Label>
                    <Input
                      type='date'
                      placeholder='Deadline'
                      value={projectDetails.deadline}
                      onChange={(e) =>
                        handleInputChange('deadline', e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col'>
                    <Label>Description</Label>
                    <small className='text-xs text-gray-500 py-2 mb-2'>
                      Details about your project
                    </small>
                    <textarea
                      placeholder='Project Description'
                      value={projectDetails.description}
                      rows={12}
                      className='flex  w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                      onChange={(e) =>
                        handleInputChange('description', e.target.value)
                      }
                    />
                  </div>
                  <div className='flex flex-col '>
                    <Label>Project Goal</Label>
                    <small className='text-xs text-gray-500 py-2 mb-2'>
                      Idea behind the project
                    </small>
                    <textarea
                      placeholder='Mission'
                      rows={12}
                      className='flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                      value={projectDetails.mission}
                      onChange={(e) =>
                        handleInputChange('mission', e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-4'>
                    <Label>Type</Label>
                    <select
                      placeholder='Type'
                      value={projectDetails.type}
                      onChange={(e) =>
                        handleInputChange('type', e.target.value)
                      }
                      className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                    >
                      <option value='e-commerce'>E-Commerce</option>
                      <option value='crm'>CRM</option>
                      <option value='social-media'>Social Media</option>
                      <option value='blog'>Blog Site</option>
                      <option value='portfolio'>Portfolio</option>
                      <option value='news'>News App</option>
                      <option value='education'>Educational App</option>
                      <option value='health'>Health Service App</option>
                      <option value='finance'>Finance Info</option>
                      <option value='bookings'>Bookings App</option>
                      <option value='quotes-app'>Quotes App</option>
                      <option value='invoicing-app'>Invoicing App</option>
                      <option value='payments-app'>Payments App</option>
                      <option value='schedu;ling-app'>Scheduling App</option>
                      <option value='customer-app'>Customer Service App</option>
                      <option value='marketing-app'>Marketing App</option>
                      <option value='sales-app'>Sales App</option>
                      <option value='video-streaming'>Video Streaming</option>
                      <option value='audio-streaming'>Audio Streaming</option>
                      <option value='photo-sharing'>Photo Sharing</option>
                      <option value='file-sharing'>File Sharing</option>
                      <option value='project-management'>
                        Project Management
                      </option>
                      <option value='team-collaboration'>
                        Team Collaboration
                      </option>
                      <option value='event-management'>Event Management</option>
                      <option value='survey-app'>Survey App</option>
                      <option value='polling-app'>Polling App</option>
                      <option value='feedback-app'>Feedback App</option>
                      <option value='support-app'>Support App</option>
                      <option value='chat-app'>Chat App</option>
                      <option value='forum-app'>Forum App</option>
                      <option value='wiki-app'>Wiki App</option>
                      <option value='knowledge-base'>Knowledge Base</option>
                      <option value='helpdesk-app'>Helpdesk App</option>
                      <option value='ticketing-app'>Ticketing App</option>
                      <option value='bug-tracking'>Bug Tracking</option>
                      <option value='inventory'>Inventory Management</option>
                      <option value='leads'>Leads Management</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <Label>Tags</Label>
                    <Input
                      type='text'
                      placeholder='Tags (comma-separated)'
                      value={projectDetails.tags}
                      onChange={(e) =>
                        handleInputChange('tags', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button
            className='bg-green-500 text-white'
            onClick={handleFormSubmit}
          >
            Next: Survey Features
          </Button>
        </div>
      )}

      {showSurvey && (
        <div className='mt-8 flex flex-col justify-center items-center gap-4'>
          <h2 className='text-gray-500 text-lg'>Step 2</h2>
          <h2 className='text-xl text-cyan-800 font-bold'>Feature Survey</h2>
          <FeatureSurvey onSave={(features) => handleSaveFeatures(features)} />
          {error && (
            <Card>
              <CardHeader>
                <CardTitle className='my-2'>Errors</CardTitle>
                <CardContent className='my-2'>
                  {flatten(values(error)).map((e) => (
                    <p className='text-red-500'>{e}</p>
                  ))}
                </CardContent>
              </CardHeader>
            </Card>
          )}
          <div className='flex gap-4 justify-between my-8'>
            <Button
              onClick={() => {
                setShowSurvey(false);
                setShowForm(true);
              }}
            >
              Back to Step 1
            </Button>
            <Button
              onClick={() => {
                setShowSurvey(false);
                setShowForm(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      {!showForm && !showSurvey && (
        <>
          <div className='mt-4'>
            <div className='flex flex-wrap -mx-6'>
              <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Total Projects
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'
                    >
                      <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>{totalProjects}</div>
                    <p className='text-xs text-muted-foreground'>
                      {projects.filter(
                        (p) =>
                          p.createdAt?.toDate().getMonth() <
                          new Date().getMonth()
                      ).length -
                        projects.filter(
                          (p) =>
                            p.createdAt?.toDate().getMonth() ===
                            new Date().getMonth()
                        ).length}{' '}
                      since last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Project currently in development
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'
                    >
                      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                      <circle cx='9' cy='7' r='4' />
                      <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>
                      {totalActiveProjects}
                    </div>
                    <p className='text-xs text-muted-foreground'>
                      +1 since last week
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Total Days
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>
                      {projects.reduce(
                        (acc, curr) => acc + curr.survey.time,
                        0
                      )}
                    </div>
                    <p className='text-xs text-muted-foreground'>
                      -0.5 days from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                {!projects ||
                  (projects.length === 0 && (
                    <div className='flex flex-col items-center justify-center p-4 w-full'>
                      <h2 className='text-lg text-sky-800'>
                        No projects found
                      </h2>
                      <p className='text-sm text-gray p-4'>
                        You do not have any projects yet, Click{' '}
                        <strong>"New Project +"</strong>
                        to add one
                      </p>
                    </div>
                  ))}
                {projects && projects.length > 0 && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Project Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead>Deadline</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects.map((p) => (
                        <TableRow>
                          <TableCell className='font-medium'>
                            {p.title}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                status === 'pending-review'
                                  ? 'warning'
                                  : 'default'
                              }
                            >
                              {p.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {p.lastUpdated.toDate().toString()}
                          </TableCell>
                          <TableCell>{p.deadline}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
