import { Component, OnInit } from '@angular/core'
import { HomeData } from './home.data'
import { GitHubProfileInfo } from './GitHubProfileInfo'
import { GitHubFollowersInfo } from './GitHubFollowersInfo'
import { GitHubRepositoriesInfo } from './GitHubRepositoriesInfo'
import { GitHubContributorsInfo } from './GitHubContributorsInfo'

@Component ({
  selector: 'home',
  providers: [HomeData],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    gitHubProfileInfo: GitHubProfileInfo;
    gitHubFollowersInfo: GitHubFollowersInfo
    gitHubRepositoriesInfo: GitHubRepositoriesInfo
    gitHubContributorsInfo: GitHubContributorsInfo

    constructor (
        private homeData: HomeData
    ) { }

    ngOnInit () {
      this.homeData
      .getProfileData()
      .then(profileInfo => {
        this.gitHubProfileInfo = profileInfo;
      });
    }

    getFollowersData() {
      this.homeData
      .getFollowersData()
      .then(followersInfo => {
        this.gitHubFollowersInfo = followersInfo;
      });
    }

    getRepositoriesData() {
      this.homeData
      .getRepositoriesData()
      .then(repositoriesInfo => {
        this.gitHubRepositoriesInfo = repositoriesInfo;
      });
    }

}