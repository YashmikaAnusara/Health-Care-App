const router = require("express").Router();
const User = require("../Models/user");
const AdminFeed = require("../Models/adminfeed");

router.route("/user/save").post((req, res) => {
  const { name, email, password, type, permission } = req.body;
  const requestmonth = new Date();

  const month = requestmonth.getMonth();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  User.findOne({ email: email })
    .then((data) => {
      if (data) {
        res.json({ status: false, message: "This email already exist!" });
      } else {
        const data = new User({
          email: email,
          name: name,
          password: password,
          type: type,
          permission: permission,
          month: months[month],
        });
        data.save((error, data) => {
          if (error) {
            return res.status(400).json({
              status: false,
              err: error,
            });
          }
          return res.json({
            status: true,
            message: "Registration Successful!",
          });
        });
      }
    })
    .catch((err) => {
      res.json({
        status: false,
        message: "Registration Faild!",
      });
    });
});

router.route("/user/signin/:email/:password").get((req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  User.findOne({
    $and: [{ email: { $eq: email } }, { password: { $eq: password } }],
  })
    .then((data) => {
      res.json({ status: true, type: data.type, email: data.email });
    })
    .catch((err) => {
      res.json({ status: false, message: "Invalid Login Credintials!" });
    });
});

router.route("/profile/:email").get((req, res) => {
  let email = req.params.email;
  User.find({ email: email })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.route("/user/remind/update/:email").post((req, res) => {
  let email = req.params.email;
  const { r1, r2, r3, r4, r5, r6, r7, r8 } = req.body;

  User.findOneAndUpdate(
    { email: email },
    {
      $set: {
        reminder: [
          { r1: r1 },
          { r2: r2 },
          { r3: r3 },
          { r4: r4 },
          { r5: r5 },
          { r6: r6 },
          { r7: r7 },
          { r8: r8 },
        ],
      },
    }
  )
    .then((data) => {
      res.json({ status: true, message: "Updated!" });
    })
    .catch((err) => {
      res.json({ status: false, message: "Try again!" });
    });
});

router.route("/rimind/:email").get((req, res) => {
  let email = req.params.email;
  User.findOne({ email: email })
    .then((data) => {
      res.json({
        r1: data.reminder[0].r1,
        r2: data.reminder[1].r2,
        r3: data.reminder[2].r3,
        r4: data.reminder[3].r4,
        r5: data.reminder[4].r5,
        r6: data.reminder[5].r6,
        r7: data.reminder[6].r7,
        r8: data.reminder[7].r8,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.route("/user/helth/info/save/:email").post((req, res) => {
  let email = req.params.email;
  const {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
  } = req.body;

  User.findOneAndUpdate(
    { email: email },
    {
      $push: {
        healthInfo: [
          { question1: question1 },
          { question2: question2 },
          { question3: question3 },
          { question4: question4 },
          { question5: question5 },
          { question6: question6 },
          { question7: question7 },
        ],
      },
    }
  )
    .then((data) => {
      res.json({
        status: true,
        message: "Congregation! Your sign-up is successful.",
      });
    })
    .catch((err) => {
      res.json({ status: false, message: "Try again!" });
    });
});

router.route("/addfeed").post((req, res) => {
  const feedtopic = req.body.feedtopic;
  const feedbody = req.body.feedbody;

  const newfeed = new AdminFeed({
    feedtopic: feedtopic,
    feedbody: feedbody,
  });

  newfeed
    .save()
    .then(() => {
      res.json("Feed Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/feed").get((req, res) => {
  AdminFeed.find()
    .then((feed) => {
      res.json(feed);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/emp/:month").get((req, res) => {
  let type = "User";
  let month = req.params.month;
  User.find({ type: type })
    .then((emp) => {
      if (emp.length === 0) {
        res.json({ status: false, emp });
      } else {
        res.json({ status: true, emp });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

router.route("/feed/:_id").delete((req, res) => {
  let _id = req.params._id;
  AdminFeed.findOneAndDelete({ _id: _id })
    .then((emp) => {
      res.json(emp);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/chat").get((req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// // student Registration

// // router.route("/leader/register").post((req, res) => {
// //     const { LeaderRegNo, LeaderName, LeaderEmail, LeaderContact, faculty } = req.body
// //     const register = new LeaderReg({ LeaderRegNo: LeaderRegNo, LeaderName: LeaderName, LeaderEmail: LeaderEmail, LeaderContact: LeaderContact, faculty: faculty })
// //     register.save((err, data) => {
// //         if (err) {
// //             return res.status(400).json({
// //                 error: err
// //             })
// //         }
// //         return res.status(200).json({
// //             data: data
// //         })
// //     })
// // })

// router.route("/reg/:grpId/:id").post((req, res) => {
//   let grpId = req.params.grpId;
//   let id = req.params.id;
//   const {
//     LeaderRegNo,
//     LeaderName,
//     LeaderEmail,
//     LeaderContact,
//     faculty,
//     password,
//   } = req.body;
//   const register = new StudentReg({
//     GrpID: grpId,
//     ID: id,
//     FistrMemberRegNo: LeaderRegNo,
//     FistrMemberName: LeaderName,
//     FistrMemberEmail: LeaderEmail,
//     FistrMemberContact: LeaderContact,
//     faculty: faculty,
//     password: password,
//   });
//   register.save((err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     return res.status(200).json({
//       data: data,
//     });
//   });
// });
// //request a id
// router.route("/request/id").get((req, res) => {
//   StudentReg.find().exec(function (err, details) {
//     var tot = 0;
//     var max = 0;
//     var newId = 1;
//     while (tot < details.length) {
//       if (max < details[tot].ID) {
//         max = details[tot].ID;
//       }
//       tot++;
//     }
//     newId = newId + parseInt(max);
//     res.json(String(newId));
//   });
// });

// // student login
// router.route("/login/:id/:password").get((req, res) => {
//   let id = req.params.id;
//   let pass = req.params.password;
//   StudentReg.find({
//     $and: [{ GrpID: { $eq: id } }, { password: { $eq: pass } }],
//   }).exec(function (err, details) {
//     res.json(details.length);
//   });
// });
// // get leader's id
// router.route("/leader/id/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.FistrMemberRegNo);
//   });
// });
// // get leader's name
// router.route("/leader/name/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.FistrMemberName);
//   });
// });

// router.route("/second/id/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.secondMemberRegNo);
//   });
// });

// router.route("/second/name/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.secondMemberName);
//   });
// });

// router.route("/third/id/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.thirdMemberRegNo);
//   });
// });

// router.route("/third/name/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.thirdMemberName);
//   });
// });

// router.route("/fourth/id/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.fourthMemberRegNo);
//   });
// });

// router.route("/fourth/name/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.fourthMemberName);
//   });
// });

// router.route("/fifth/id/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.fivthMemberRegNo);
//   });
// });

// router.route("/fifth/name/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.fivthMemberName);
//   });
// });

// router.route("/sixth/id/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.sixthMemberRegNo);
//   });
// });

// router.route("/sixth/name/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } }).exec(function (err, details) {
//     res.json(details.sixthMemberName);
//   });
// });

// // other members registration
// router.route("/group/reg/:groupID").put((req, res) => {
//   let GrpID = req.params.groupID;
//   const {
//     secondMemberRegNo,
//     secondMemberName,
//     thirdMemberRegNo,
//     thirdMemberName,
//     fourthMemberRegNo,
//     fourthMemberName,
//     fivthMemberRegNo,
//     fivthMemberName,
//     sixthMemberRegNo,
//     sixthMemberName,
//   } = req.body;
//   StudentReg.findOneAndUpdate(
//     { GrpID: GrpID },
//     {
//       secondMemberRegNo: secondMemberRegNo,
//       secondMemberName: secondMemberName,
//       thirdMemberRegNo: thirdMemberRegNo,
//       thirdMemberName: thirdMemberName,
//       fourthMemberRegNo: fourthMemberRegNo,
//       fourthMemberName: fourthMemberName,
//       fivthMemberRegNo: fivthMemberRegNo,
//       fivthMemberName: fivthMemberName,
//       sixthMemberRegNo: sixthMemberRegNo,
//       sixthMemberName: sixthMemberName,
//     }
//   )
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
// // get gorup details
// router.route("/group/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentReg.findOne({ GrpID: { $eq: id } })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //student Request save
// router.route("/request/save").post((req, res) => {
//   const { name, email, position, id, topic, topicDis, submitdate } = req.body;
//   const register = new StudentRequest({
//     Name: name,
//     email: email,
//     position: position,
//     GrpID: id,
//     Topic: topic,
//     TopicDiscription: topicDis,
//     submitdate: submitdate,
//     status: "pending",
//   });
//   register.save((err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     return res.status(200).json({
//       data: data,
//     });
//   });
// });
// //find student request
// router.route("/get/studentRequest/:id").get((req, res) => {
//   let id = req.params.id;
//   StudentRequest.find({ GrpID: { $eq: id } })
//     .then((result) => res.send(result))
//     .catch((err) => {
//       console.log(err);
//     });
// });

// //delete requests

// router.route("/remove/studentRequest/:id/:name").get((req, res) => {
//   let id = req.params.id;
//   let name = req.params.name;
//   StudentRequest.deleteOne({
//     $and: [{ GrpID: { $eq: id } }, { Name: { $eq: name } }],
//   })
//     .then((curds) => {
//       res.json(curds);
//     })
//     .catch((errr) => {
//       res.json(errr);
//     });
// });

// //topic request details

// router.route("/request/save").post((req, res) => {
//   const { ID } = req.body;
//   const { Faculty } = req.body;
//   const { Topic } = req.body;
//   const { Discription } = req.body;
//   const paths = req.file.path;

//   console.log("ID");

//   const files = new File({
//     ID: ID,
//     Faculty: Faculty,
//     Topic: Topic,
//     Discription: Discription,
//     avatar: paths,
//   });
//   files
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //get topic request details

// router.route("/file/get").get((req, res) => {
//   File.find()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //delete members findOneAndDelete  { FistrMemberName: { $eq: name },FistrMemberRegNo: { $eq: regNo } }||{ secondMemberName: { $eq: name },secondMemberRegNo: { $eq: regNo } }||{ thirdMemberName: { $eq: name },thirdMemberRegNo: { $eq: regNo } }||{ fourthMemberName: { $eq: name },fourthMemberRegNo: { $eq: regNo } }||{ fivthMemberName: { $eq: name },fivthMemberRegNo: { $eq: regNo } }|| { sixthMemberName: { $eq: name },sixthMemberRegNo: { $eq: regNo } }

// // router.route("/student/delete/:id/:name/:reg").get((req, res) => {
// //     let id = req.params.id;
// //     let name = req.params.name;
// //     let regNo=req.params.reg;

// //     StudentReg.findByIdAndUpdate({$replaceOne: { input: "$FistrMemberName", find: name, replacement: "" }})
// //         .then((data) => {
// //             res.json(data)
// //         })
// //         .catch(err => {
// //             res.json(err)
// //         })
// // })

// //-------------------  Thivanka - Student API End -------------------------------------------------------------------------------------------------------

// router.route("/get/:position").get((req, res) => {
//   const position = req.params.position;
//   Staff.find({ position: { $eq: position } })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
