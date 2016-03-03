package by.bvpatent.service;

import by.bvpatent.model.Account;

import java.util.List;

public interface AccountService {

    void addAccount(Account account);
    void removeAccount(Integer id);
    public List<Account> getAllAccount();

}
