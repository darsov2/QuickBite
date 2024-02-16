package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.MenuImages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuImagesRepository extends JpaRepository<MenuImages, Long> {
}
