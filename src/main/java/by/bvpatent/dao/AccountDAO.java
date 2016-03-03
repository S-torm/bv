package by.bvpatent.dao;

import by.bvpatent.model.Account;
import java.util.List;

public interface AccountDAO {

    void addAccount(Account account);
    void removeAccount(Integer id);
    public List<Account> getAllAccount();

}
