define({ "api": [
  {
    "type": "get",
    "url": "/api/content/json_fetch_exam/",
    "title": "Get exam status",
    "name": "fetch_exam",
    "description": "<p>Get exam status</p>",
    "version": "0.1.0",
    "group": "Contents",
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n     {JSON}\n}\n\n*",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/content.js",
    "groupTitle": "Contents"
  },
  {
    "type": "get",
    "url": "/api/content/json_fetch_user_slide/",
    "title": "Get slide status",
    "name": "fetch_user_slide",
    "description": "<p>Get slide status</p>",
    "version": "0.1.0",
    "group": "Contents",
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n     {JSON}\n}\n\n*",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/content.js",
    "groupTitle": "Contents"
  },
  {
    "type": "get",
    "url": "/api/content/json_finish_exam",
    "title": "Finish exam",
    "name": "finish_exam",
    "description": "<p>Finish exam</p>",
    "version": "0.1.0",
    "group": "Contents",
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n     {JSON}\n}\n*",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/content.js",
    "groupTitle": "Contents"
  },
  {
    "type": "get",
    "url": "/api/content/take_test/",
    "title": "Start Exam",
    "name": "take_test",
    "description": "<p>Start user exam</p>",
    "version": "0.1.0",
    "group": "Contents",
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n     {JSON}\n}\n*",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/content.js",
    "groupTitle": "Contents"
  },
  {
    "type": "get",
    "url": "/all_courses",
    "title": "allCourses",
    "name": "allCoursesViews",
    "description": "<p>Load all courses template</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "200",
            "description": "<p>Params related with user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response ",
          "content": "{\n     status :  {String},\n     courses : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/available_courses/",
    "title": "availableCourses",
    "name": "available_courses",
    "description": "<p>Returns list of courses where the user is not registered</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"courses\" : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/completed_courses/",
    "title": "getCompletedCourses",
    "name": "completed_courses",
    "description": "<p>Get all completed courses list</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"courses\" : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/:slug/details",
    "title": "courseDetails",
    "name": "courseDetails",
    "description": "<p>Load course details and allows render course details params</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON[]",
            "optional": false,
            "field": "200",
            "description": "<p>params related with course information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n params = {\n     course : {JSON},\n     user :  {JSON}\n\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/course/:slug",
    "title": "courseVIews",
    "name": "courseView",
    "group": "Courses",
    "description": "<p>load course template</p>",
    "version": "0.0.0",
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/:slug",
    "title": "getCourseDataStudent",
    "name": "course_data_student_",
    "description": "<p>Load data student on course</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n     status : {String},\n     course : {JSON}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/all_courses",
    "title": "getAllCourses",
    "name": "getAllCourses",
    "description": "<p>Get all courses list</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"courses\" : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/my_courses",
    "title": "getMyCourses",
    "name": "getMyCourses",
    "description": "<p>Get user Courses</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"courses\" : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "AuthenticationFailed:",
          "content": "HTTP/1.1 400 ERROR\n{\n    \"status\" : \"failed\",\n    \"message\" : \"User is not authenticated\"\n\n}",
          "type": "Object"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/public_courses",
    "title": "getPublicCourses",
    "name": "getPublicCourses",
    "description": "<p>Get public courses list</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"courses\" : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/course/inscribe/:user/:slug",
    "title": "inscribeUser",
    "name": "inscribe_on_course",
    "description": "<p>Inscribe user on course</p>",
    "version": "0.1.0",
    "group": "Courses",
    "success": {
      "examples": [
        {
          "title": "Success-response",
          "content": "HTTP/1.1 200 OK\n{\n     status : {String}\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ErrorResponse",
          "content": "{\n     status : \"failed\",\n     message : {String}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/certifications/my_certifications",
    "title": "getUserCertifications",
    "name": "my_certifications",
    "description": "<p>Get list of user certifications</p>",
    "version": "0.1.0",
    "group": "Courses",
    "success": {
      "examples": [
        {
          "title": "Success-response",
          "content": "HTTP/1.1 200 OK\n{\n     status : {String},\n     certifications : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/next_courses/",
    "title": "nextCourses",
    "name": "next_courses",
    "description": "<p>Returns the list of courses that none of its sessions has started</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"courses\" : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/api/courses/related_courses/:slug",
    "title": "getCoursesRelated",
    "name": "related_courses",
    "description": "<p>Get all related courses list</p>",
    "group": "Courses",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"courses\" : {JSON[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "api/organization/create_organization",
    "title": "createOrganization",
    "name": "createOrganization",
    "description": "<p>create a organization in the plataform</p>",
    "group": "Organizations",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of new organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>Url to access this organization like: kmelx.com/organization_url</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "logoUpload",
            "description": "<p>:      Logo image file for new organization</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "bannerUpload",
            "description": "<p>:    Banner image file for new organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bannerColor",
            "description": "<p>Hexadecimal color code for banner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fontColorBanner",
            "description": "<p>: Font color of banner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "textColor",
            "description": "<p>Color of text on organization banner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Username of organization's creator</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "enabled_name",
            "description": "<p>Name that's shown on organization's banner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Position of organization banner</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"message\" : {String}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "AuthenticationFailed:",
          "content": "HTTP/1.1 400 ERROR",
          "type": "Object"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/organizations.js",
    "groupTitle": "Organizations"
  },
  {
    "type": "get",
    "url": "/api/organization/get/:url",
    "title": "getOrganization",
    "name": "getOrganization",
    "description": "<p>get information of the organization</p>",
    "group": "Organizations",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>Url to access this organization like: kmelx.com/organization_url</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok,\n    \"msg\" : {String}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "AuthenticationFailed:",
          "content": "HTTP/1.1 400 ERROR",
          "type": "Object"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR",
          "type": "Object"
        }
      ]
    },
    "filename": "./apps/organizations.js",
    "groupTitle": "Organizations"
  },
  {
    "type": "get",
    "url": "/api/tribes/get_topic/:id",
    "title": "Get Topic data",
    "name": "get_topic",
    "description": "<p>Get Topic data</p>",
    "group": "Tribes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic unique ID</p> <ul> <li></li> </ul>"
          }
        ]
      }
    },
    "filename": "./apps/tribes.js",
    "groupTitle": "Tribes"
  },
  {
    "type": "get",
    "url": "/api/tribes/get_tribe/:id",
    "title": "Get Tribe data",
    "name": "get_tribe",
    "description": "<p>Get Tribe data</p>",
    "group": "Tribes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Tribe unique ID</p> <ul> <li></li> </ul>"
          }
        ]
      }
    },
    "filename": "./apps/tribes.js",
    "groupTitle": "Tribes"
  },
  {
    "type": "post",
    "url": "/api/tribes/send_post/:id",
    "title": "Send new comment on topic",
    "name": "send_post",
    "description": "<p>Send new comment to topic</p>",
    "group": "Tribes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment on topic</p> <ul> <li></li> <li></li> </ul>"
          }
        ]
      }
    },
    "filename": "./apps/tribes.js",
    "groupTitle": "Tribes"
  },
  {
    "type": "post",
    "url": "/api/xapi/statements",
    "title": "InsertStatement",
    "name": "InsertStatement",
    "description": "<p>Insert statement as xapi</p>",
    "group": "XAPI",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "success-response",
          "content": "HTTP/1.1 200 OK\n{\n     status : \"ok\",\n     message : {String},\n     bookmark_success : {Object[]},\n     bookmark_failed : {Object[]}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "StatementMissing",
          "content": "HTTP/1.1 400 ERROR\n{\n    \"status\" : \"failed\",\n    \"message\" : {String},\n    \"error\" : {String}\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : {String}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apps/xapi.js",
    "groupTitle": "XAPI"
  },
  {
    "type": "get",
    "url": "/api/xapi/statements/",
    "title": "get_statements",
    "name": "getStatements",
    "description": "<p>Get statements saved by user</p>",
    "group": "XAPI",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "200 Get statements by user",
          "content": "{\n     status : \"ok\",\n     statements : {Object[]} \n}",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "400 AuthenticationFailed",
          "content": "{\n     \"status\": \"failed\",\n     \"message\": \"User is not authenticated\"\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./apps/xapi.js",
    "groupTitle": "XAPI"
  },
  {
    "type": "post",
    "url": "/api/account/register",
    "title": "Register",
    "name": "Register",
    "description": "<p>Allows register a user on platform</p>",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameters",
          "content": "HTTP/1.1 400 ERROR\n{\n    \"status\" : \"failed\",\n    \"message\" : \"Bad Request\"\n}",
          "type": "json"
        },
        {
          "title": "username or email already taken",
          "content": "HTTP/1.1 400 ERROR\n{\n    \"status\" : \"failed\",\n    \"message\" : \"username or email already taken\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account.js",
    "groupTitle": "account"
  },
  {
    "type": "post",
    "url": "/api/account/is_authenticated/",
    "title": "is_authenticated",
    "name": "isAuthenticated",
    "description": "<p>return logged status in session</p>",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "Success-response",
          "content": "HTTP/1.1 200 OK\n{\n    \"logged\" : {Boolean}\n}",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account.js",
    "groupTitle": "account"
  },
  {
    "type": "post",
    "url": "/api/account/login",
    "title": "Login",
    "name": "login",
    "description": "<p>Request for authentication</p>",
    "group": "account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "AuthenticationFailed:",
          "content": "HTTP/1.1 400 ERROR\n{\n    \"status\" : \"failed\",\n    \"message\" : \"username and/or passowrd are incorrect\"\n\n}",
          "type": "Object"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 ERROR\n{\n    \"status\" : \"error\",\n    \"message\" : \"Server Error - check endpoint server\"\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account.js",
    "groupTitle": "account"
  },
  {
    "type": "get",
    "url": "/account/login",
    "title": "",
    "name": "loginView",
    "description": "<p>Load login template with params</p>",
    "group": "account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "200",
            "description": "<p>Params related with user { user : { &quot;logged&quot; : {Boolean}, &quot;username&quot; : {String}, &quot;first_name&quot; : {String}, &quot;last_name&quot; : {String}, &quot;groups&quot; : {String[]}, &quot;is_admin&quot; : {Boolean}, &quot;is_staff&quot; : {Boolean} } }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./apps/account.js",
    "groupTitle": "account"
  },
  {
    "type": "post",
    "url": "/api/account/logout",
    "title": "Logout",
    "name": "logout",
    "description": "<p>Close session</p>",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\" : ok\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account.js",
    "groupTitle": "account"
  },
  {
    "type": "get",
    "url": "/api/account/exists/:username",
    "title": "User exists?",
    "name": "user_exists",
    "description": "<p>Function that return is a username is already taken</p>",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "Success-response",
          "content": "HTTP/1.1 200 OK\n{\n     status : {String},\n     exists : {Boolean}\n}\n*",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account.js",
    "groupTitle": "account"
  }
] });
