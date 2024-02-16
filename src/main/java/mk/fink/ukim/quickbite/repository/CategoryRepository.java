package mk.fink.ukim.quickbite.repository;

import mk.fink.ukim.quickbite.entites.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
