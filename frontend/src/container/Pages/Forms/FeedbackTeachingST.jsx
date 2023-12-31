import React from 'react'
import Navbar from '../../../components/Navbar';
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms';
import StudentTeachingFeedback from '../../../components/utils/data/StudentTeachingFeedback';
import StudentTeachingFeedbackForm from '../../../data/StudentTeachingFeedbackForm';

const FeedbackTeachingST = () => {

  const headings = ["Student Details", "Details of the teacher to be evaluated" , "Your Feedback about the Teacher","Review"]
  const limit = headings.length -1;
  const message = "In Feedback Section of Teaching Staff 1 represents lowest marks and 5 is considered as highest"
  return (
    <div>
      <Navbar /> 
      <FormInfo
        title="Student's Feedback- Teaching Staff"
      />
      
      <Forms
        pageHeadings={headings}
        pageCount={limit}
        data={StudentTeachingFeedbackForm}
        stages={StudentTeachingFeedback}
        message = {message}
      />
    </div>
  )
}

export default FeedbackTeachingST
