package by.bvpatent.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AccountIndex {
    //@RequestMapping("/")
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getIndexPage() {
        return "main.html";
    }


/*    @RequestMapping(value = "/accounts/new", method = RequestMethod.GET)
    public void createUser() {
        System.out.println(" /accounts/new GET ");
        //return "[]";
    }*/
}