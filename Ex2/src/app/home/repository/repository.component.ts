import { Component, Input } from '@angular/core'
import { GitHubRepositoriesInfo } from '../GitHubRepositoriesInfo'
import { GitHubContributorsInfo } from '../GitHubContributorsInfo'
import { HomeData } from '../home.data'

@Component ({
  selector: 'repository',
  providers: [HomeData],
  template: 
  `
  <a href='{{repository.html_url}}'>{{repository.name}}</a>
  <li>Language: <font color='green'>{{repository.language}}</font></li>
  <li>Stars: <font color='green'>{{repository.stargazers_count}}</font></li>
    <div>
      <button (click)='getContributorsData(repository.name + "/contributors")'>Contributors Data</button>
      <br/>
      <contributor *ngFor='let contributor of gitHubContributorsInfo'
      [contributor]='contributor'>
    </contributor>
    </div>
  `
  
})

export class RepositoryComponent {

  constructor (
        private homeData: HomeData
    ) { }

  @Input() repository: GitHubRepositoriesInfo
  gitHubContributorsInfo: GitHubContributorsInfo

  getContributorsData(repoName) {
      this.homeData
      .getContributorsData(repoName)
      .then(contributorsInfo => {
        this.gitHubContributorsInfo = contributorsInfo;
      });
    }
}