package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.*;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
