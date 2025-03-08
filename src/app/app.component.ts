import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 3000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = this.filterUserList(filterOptions, this.usersList);
  }

  filterUserList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.userFilterUsersListByName(
      filterOptions.name,
      usersList
    );

    return filteredList;
  }

  userFilterUsersListByName(
    name: string | undefined,
    usersList: IUser[]
  ): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) return usersList;

    const filteredList = usersList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList;
  }
}
