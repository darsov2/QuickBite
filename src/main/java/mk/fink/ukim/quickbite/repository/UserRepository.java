package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
