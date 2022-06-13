class Team {
  constructor(teamName, members) {
    this.teamName = teamName;
    this.members = members;
  }

  getTeamName() {
    return this.teamName;
  }

  getNumberOfTeamMembers() {
    return this.members.length;
  }
}

module.exports = Team;
