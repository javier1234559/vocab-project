import { Theme,Heading, Grid, Text, Card, Flex, Avatar, Box } from '@radix-ui/themes';
import { Navbar } from "@/components/layout/Navbar" 
import { Footer } from "@/components/layout/Footer"
import '@radix-ui/themes/styles.css'; 
import { Button } from '@/components/common/Button';
import { CardCourse } from '@/components/common/Card';

export default function Page() {
  return (
    <>
        <Theme>
            <Navbar /> 
                <div className='mt-[var(--navbar-height)] mb-[8rem] max-md:mb-[0rem]' /> 
                <div className='grid grid-cols-4 gap-[100px] mx-[80px] mt-[147px] w-100 max-md:grid-cols-1 max-md:mx-[20px] max-md:gap-0'>
                  <div className='course col-span-3'>
                    <div className='your-course'>
                      <div className='course-header flex justify-between items-center '>
                        <Heading>Khoá học của bạn</Heading> 
                        <div className='navigate-course-swapper'>
                          <Button className='navigation-course-prev' leftIcon={<>{"<"}</>}> 
                          </Button>
                          <Text> 1/2 </Text>
                          <Button className='navigation-course-next' leftIcon={<>{">"}</>}> 
                          </Button> 
                        </div> 
                      </div>

                      <div className='course-body mt-[27px]'>    
                        <CardCourse title={'Course name'} className={'mt-[20px]'} wordLearnt={150} totalWords={1500}></CardCourse>
                        <CardCourse title={'Course name'} className={'mt-[20px]'} wordLearnt={150} totalWords={1500}></CardCourse>
                        <CardCourse title={'Course name'} className={'mt-[20px]'} wordLearnt={150} totalWords={1500}></CardCourse> 
                      </div>
                    </div>  

                    <div className='divider h-[3px] w-full bg-black mt-[33px] mb-[46px]'> 
                    </div>
                    
                    <div className='suggest-course'>
                        <Heading>Đề xuất</Heading>
                        <div className='mt-[29px] grid grid-cols-3 gap-[20px] max-md:grid-cols-2'>   
                          <CardCourse title="Course name" description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.'></CardCourse>
                          <CardCourse title="Course name" description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.'></CardCourse>
                          <CardCourse title="Course name" description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.'></CardCourse>
                        </div>
                    </div>
                  </div>
                  <div className='ranking max-md:grid max-md:grid-cols-2 max-md:w-full max-md:mt-[30px] max-sm:grid-cols-1'>
                      <div className='flex justify-center streak max-sm:mb-[30px]'>
                      <Heading  size='5' className='capitalize'>Streak</Heading> 
                      </div>
                      <div className='flex justify-center rank'>
                        <div className='wrapper max-md: text-center'>
                          <Heading  size='5' className='capitalize'>Bảng xếp hạng</Heading>
                          <div className='rank-list'>
                            <div className='mt-[25px]'></div>
                            <Card>
                              <Flex gap="4" align="center" justify='between'>
                                <Flex align='center' gap='2'>
                                  <Avatar
                                    size="4"
                                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                    radius="full"
                                    fallback="T"
                                  /> 
                                  <Text as="div" size="3" weight="bold">
                                      User name
                                  </Text> 
                                </Flex>
                                <Box> 
                                  <Text as="div" size="3" color="gray">
                                    Scores
                                  </Text>
                                </Box>
                              </Flex>
                            </Card>    

                            
                            <Card style={{  marginTop: '10px' }}>
                              <Flex gap="4" align="center" justify='between'>
                                <Flex align='center' gap='2'>
                                  <Avatar
                                    size="4"
                                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                    radius="full"
                                    fallback="T"
                                  /> 
                                  <Text as="div" size="3" weight="bold">
                                      User name
                                  </Text> 
                                </Flex>
                                <Box> 
                                  <Text as="div" size="3" color="gray">
                                    Scores
                                  </Text>
                                </Box>
                              </Flex>
                            </Card>     

                            
                            <Card style={{  marginTop: '10px' }}>
                              <Flex gap="4" align="center" justify='between'>
                                <Flex align='center' gap='2'>
                                  <Avatar
                                    size="4"
                                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                    radius="full"
                                    fallback="T"
                                  /> 
                                  <Text as="div" size="3" weight="bold">
                                      User name
                                  </Text> 
                                </Flex>
                                <Box> 
                                  <Text as="div" size="3" color="gray">
                                    Scores
                                  </Text>
                                </Box>
                              </Flex>
                            </Card>     

                                                        
                            <Card style={{  marginTop: '10px' }}>
                              <Flex gap="4" align="center" justify='between'>
                                <Flex align='center' gap='2'>
                                  <Avatar
                                    size="4"
                                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                    radius="full"
                                    fallback="T"
                                  /> 
                                  <Text as="div" size="3" weight="bold">
                                      User name
                                  </Text> 
                                </Flex>
                                <Box> 
                                  <Text as="div" size="3" color="gray">
                                    Scores
                                  </Text>
                                </Box>
                              </Flex>
                            </Card>     

                                                        
                            <Card style={{  marginTop: '10px' }}>
                              <Flex gap="4" align="center" justify='between'>
                                <Flex align='center' gap='2'>
                                  <Avatar
                                    size="4"
                                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                    radius="full"
                                    fallback="T"
                                  /> 
                                  <Text as="div" size="3" weight="bold">
                                      User name
                                  </Text> 
                                </Flex>
                                <Box> 
                                  <Text as="div" size="3" color="gray">
                                    Scores
                                  </Text>
                                </Box>
                              </Flex>
                            </Card>    
                          </div> 
                        </div>
                      </div>
                  </div>
                </div>
            <div className='divider h-[1px] w-full bg-black mt-[71px]'> 
            </div>
            <Footer />
      </Theme>
    </>
  )
}
