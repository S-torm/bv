package by.bvpatent.service;

import by.bvpatent.dao.AccountDAO;
import by.bvpatent.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountDAO accountDAO;

    @Transactional
    @Override
    public void addAccount(Account account) {
        accountDAO.addAccount(account);
    }

    @Transactional
    @Override
    public void removeAccount(Integer id) {
        accountDAO.removeAccount(id);
    }

    @Transactional
    @Override
    public List<Account> getAllAccount() {
        return accountDAO.getAllAccount();
    }
}
