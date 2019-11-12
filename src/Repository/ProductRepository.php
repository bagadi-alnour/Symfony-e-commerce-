<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use App\Entity\ProductSearch;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Product::class);
    }   



    /**
     * @return Query
     */
    public function findAllProductQuery(ProductSearch $search) : Query 
    {
        $query = $this->findAllProduct();
        if ($search->getKeyWord()) {
            $query = $query
                ->andWhere('p.name LIKE :keyWord')
                ->setParameter('keyWord','%' . $search->getKeyWord(). '%');
        }
        // if ($search->getSortBycategory()) {
        //     $query = $query
        //         ->andWhere('p.category  = :sortByCategory')
        //         ->setParameter('sortByCategory',$search->getSortBycategory() );
        // }
        // if ($search->getSortByPrice()) {
        //     $query = $query
        //         ->andWhere('p.price  >= :sortByPrice')
        //         ->setParameter('keyWord',$search->getSortByPrice());
        // }
    

        return $query->getQuery();
    }
    


    public function findAllProduct() : QueryBuilder
    {
        return $this->createQueryBuilder('p');
                    
    }



    // /**
    //  * @return Product[] Returns an array of Product objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Product
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
