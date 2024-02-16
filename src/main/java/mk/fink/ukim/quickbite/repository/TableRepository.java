package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<RestaurantTable, Long> {
}
