enum UserTypeEnum {
  Student,
  Teacher,
  DistrictAdmin,
}
function fetchUserEnum(userID: string, userType: UserTypeEnum) {}

fetchUserEnum("kstark", UserTypeEnum.Student);
fetchUserEnum("kstark", 0); // No error?
fetchUserEnum("kstark", 5); // Error: Argument of type '5' is not assignable to parameter of type 'UserTypeEnum'

enum UserTypeEnum2 {
  Student = "Student",
  Teacher = "Teacher",
  DistrictAdmin = "DistrictAdmin",
}
function fetchUserEnum2(userID: string, userType: UserTypeEnum2) {}

fetchUserEnum2("kstark", UserTypeEnum2.Student);
fetchUserEnum2("kstark", "Student"); // Error: Argument of type '"Student"' is not
// assignable to parameter of type 'UserTypeEnum2'

type UserTypeUnion = "Student" | "Teacher" | "DistrictAdmin";
function fetchUserUnion(userID: string, userType: UserTypeUnion) {}

fetchUserUnion("kstark", "Student");
fetchUserUnion("reuben.conn", "teacher"); // Error: Argument of type '"teacher"' is not
// assignable to parameter of type 'UserTypeUnion'
