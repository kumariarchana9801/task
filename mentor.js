app.post('/assign-student', async (req, res) => {
	const { studentId, mentorId } = req.body;
  
	const student = await Student.findById(studentId);
	const mentor = await Mentor.findById(mentorId);
  
	if (!student || !mentor) {
	  return res.status(404).send('Student or Mentor not found');
	}
  
	student.mentor = mentorId;
	mentor.students.push(studentId);
  
	await student.save();
	await mentor.save();
  
	res.send('Student assigned to mentor successfully');
  });
  