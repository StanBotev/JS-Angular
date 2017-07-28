import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { GitHubProfileInfo } from './GitHubProfileInfo'
import { GitHubFollowersInfo } from './GitHubFollowersInfo'
import { GitHubRepositoriesInfo } from './GitHubRepositoriesInfo'
import { GitHubContributorsInfo } from './GitHubContributorsInfo'
import 'rxjs/add/operator/toPromise';

const urlProfile = 'https://api.github.com/users/ajibarra';
const urlFollowers= 'https://api.github.com/users/ajibarra/followers';
const urlRepos= 'https://api.github.com/users/ajibarra/repos';
const urlContributors = 'https://api.github.com/repos/ajibarra/'
@Injectable()
export class HomeData {

  constructor (private http: Http) {}

  getProfileData () : Promise<GitHubProfileInfo> {
    return this.http
      .get(urlProfile)
      .toPromise()
      .then(resp => resp.json() as GitHubProfileInfo)
      .catch(error => {
         console.log(error);
         return new GitHubProfileInfo();
        })
  }
  
  getFollowersData () : Promise<GitHubFollowersInfo> {
    return this.http
      .get(urlFollowers)
      .toPromise()
      .then(resp => resp.json() as GitHubFollowersInfo)
      .catch(error => {
         console.log(error);
         return new GitHubFollowersInfo();
        })
  }

  getRepositoriesData () : Promise<GitHubRepositoriesInfo> {
    return this.http
      .get(urlRepos)
      .toPromise()
      .then(resp => resp.json() as GitHubRepositoriesInfo)
      .catch(error => {
         console.log(error);
         return new GitHubRepositoriesInfo();
        })
  }

  getContributorsData (repoName) : Promise<GitHubContributorsInfo> {
    return this.http
      .get(urlContributors + repoName)
      .toPromise()
      .then(resp => resp.json() as GitHubContributorsInfo)
      .catch(error => {
         console.log(error);
         return new GitHubContributorsInfo();
        })
  }
}