const router = require("express").Router();
const User = require("../Models/user");
const DayStart = require("../Models/dayStart");
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

router.route("/adddoctor").post((req, res) => {
  const docname = req.body.docname;
  const docemail = req.body.docemail;
  const docpassword = req.body.docpassword;
  const permission = "true";
  const type = "Doctor";
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

  const newfeed = new User({
    name: docname,
    email: docemail,
    password: docpassword,
    month: months[month],
    permission: permission,
    type: type,
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

router.route("/day-start/targert/find/:email").get((req, res) => {
  const email = req.params.email;
  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, "0");
  let year = dateObj.getFullYear();
  let day = String(dateObj.getDate()).padStart(2, "0");
  let today = year + "-" + month + "-" + day;

  DayStart.findOne({ email: { $eq: email } })
    .then((data) => {
      if (data === null) {
        res.json({ status: true });
      } else {
        const check = () => {
          for (let i = 0; i < data.todayPlan.length; i++) {
            if (data.todayPlan[i].date === today) {
              return { status: false, state: data.todayPlan[i].state };
            }
          }
          return { status: true };
        };
        let statee = check();
        if (statee.status === true) {
          res.json(statee);
        } else {
          res.json(statee);
        }
      }
    })
    .catch((err) => {
      res.json({
        status: false,
        message: "Something went wrong!",
      });
    });
});

router.route("/day-start/targert/save").post((req, res) => {
  const {
    email,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
  } = req.body;

  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, "0");
  let year = dateObj.getFullYear();
  let day = String(dateObj.getDate()).padStart(2, "0");
  let todayDate = year + "-" + month + "-" + day;
  var time = dateObj.getHours() + ":" + dateObj.getMinutes();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let todayday = weekday[dateObj.getDay()];

  DayStart.findOne({ email: email })
    .then((data) => {
      if (data === null) {
        const data = new DayStart({
          email: email,
        });
        data.save((error, data) => {
          if (error) {
            return res.status(400).json({
              status: false,
              err: error,
            });
          } else {
            DayStart.findOneAndUpdate(
              { email: email },
              {
                $push: {
                  todayPlan: [
                    {
                      date: todayDate,
                      time: time,
                      question1: question1,
                      question2: question2,
                      question3: question3,
                      question4: question4,
                      question5: question5,
                      question6: question6,
                      state: "ongoing",
                      avg: "0",
                      day: todayday,
                    },
                  ],
                },
              }
            )
              .then((data) => {
                res.json({
                  status: true,
                });
              })
              .catch((err) => {
                res.json({ status: false, message: "Something went wrong!" });
              });
          }
        });
      } else {
        DayStart.findOneAndUpdate(
          { email: email },
          {
            $push: {
              todayPlan: [
                {
                  date: todayDate,
                  time: time,
                  question1: question1,
                  question2: question2,
                  question3: question3,
                  question4: question4,
                  question5: question5,
                  question6: question6,
                  state: "ongoing",
                  avg: "0",
                  day: todayday,
                },
              ],
            },
          }
        )
          .then((data) => {
            res.json({
              status: true,
            });
          })
          .catch((err) => {
            res.json({ status: false, message: "Something went wrong!" });
          });
      }
    })
    .catch((err) => {
      res.json({ status: false, message: "Something went wrong!" });
    });
});

router.route("/day-end/target/update").post((req, res) => {
  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, "0");
  let year = dateObj.getFullYear();
  let day = String(dateObj.getDate()).padStart(2, "0");

  let todayDate = year + "-" + month + "-" + day;
  let summery = "finished";

  const {
    email,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
  } = req.body;

  let a =
    parseInt(question1) * 4 +
    parseInt(question2) * 4 +
    parseInt(question3) * 4 +
    parseInt(question4) * 4 +
    parseInt(question5) * 4 +
    parseInt(question6) * 4;

  let avg = a / 24;

  DayStart.updateOne(
    { email: email, "todayPlan.date": todayDate },
    {
      $set: {
        "todayPlan.$.question1": question1,
        "todayPlan.$.question2": question2,
        "todayPlan.$.question3": question3,
        "todayPlan.$.question4": question4,
        "todayPlan.$.question5": question5,
        "todayPlan.$.question6": question6,
        "todayPlan.$.state": summery,
        "todayPlan.$.avg": avg,
      },
    }
  )
    .then((data) => {
      if (avg < 2) {
        res.json({ status: true, message: 1 });
      } else if (avg > 2 && avg < 3.2) {
        res.json({ status: true, message: 2 });
      } else {
        res.json({ status: true, message: 3 });
      }
    })
    .catch((err) => {
      res.json({ status: false, message: "Try again!" });
    });
});

router.route("/employee/daily/stat/:email").get((req, res) => {
  let email = req.params.email;
  let array = [];
    let Finalarray = [];
  DayStart.findOne({ email: email }).exec(function (err, details) {
    if (err) {
      res.json({ status: false, message: "Try again later!" });
    } else {
      for (let i = 0; i < details.todayPlan.length; i++) {
        array.push({
          avg: details.todayPlan[i].avg,
          day: details.todayPlan[i].day,
        });
      }
      const newArray = array.reverse();
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].day === "Mon") { 
          Finalarray.push({
            avg: newArray[i].avg,
            day: newArray[i].day,
          });
           break
        }
          Finalarray.push({
            avg: newArray[i].avg,
            day: newArray[i].day,
          });
         
      }

      res.json(Finalarray);
    }
  });
});

// router.route("/employee/daily/stat/:email").get((req, res) => {
//   let email = req.params.email;
//   DayStart.findOne({ email: email }).exec(function (err, details) {
//     if (err) {
//       res.json({ status: false, message: "Try again later!" });
//     } else {
//       res.json(details.todayPlan);
//     }
//   });
// });

module.exports = router;
