package entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import exceptions.AuthenticationException;

/**
 *
 * @author lam@cphbusiness.dk
 */
public class UserFacade {

    //Default EntityManagerFactory
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistence");
    private static final UserFacade instance = new UserFacade();
    
    private UserFacade(){}
    
    public static UserFacade getInstance(){
        return instance;
    }
    
    public User getVeryfiedUser(String email, String password) throws AuthenticationException {
        EntityManager em = emf.createEntityManager();
        User user;
        try {
            user = em.find(User.class, email);
            if (user == null || !user.verifyPassword(password)) {
                throw new AuthenticationException("Invalid user name or password");
            }
        } finally {
            em.close();
        }
        return user;
    }
    
    public static void main(String[] args) throws AuthenticationException
    {
        User user = UserFacade.getInstance().getVeryfiedUser("Mads@mail.com", "admin");
        System.out.println("user: " + user);
    }
}
