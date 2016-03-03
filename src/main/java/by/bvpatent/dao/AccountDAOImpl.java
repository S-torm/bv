package by.bvpatent.dao;

import by.bvpatent.model.Account;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccountDAOImpl implements AccountDAO{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void addAccount(Account account) {
        sessionFactory.getCurrentSession().save(account);
    }

    @Override
    public void removeAccount(Integer id) {
        Account account = (Account) sessionFactory.getCurrentSession().load(Account.class, id);

        if(null != account){
            sessionFactory.getCurrentSession().delete(account);
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Account> getAllAccount() {
        return sessionFactory.getCurrentSession().createQuery("from Account").list();
    }
}
