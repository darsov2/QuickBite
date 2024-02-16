package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantsRepository extends JpaRepository<Restaurants, Long> {
    List<Restaurants> findAllByOrderByIdAsc();
}
