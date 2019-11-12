<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Entity\Product;
use App\Entity\ProductSearch;
use App\Form\ProductSearchType;
use Knp\Component\Pager\PaginatorInterface;
use Doctrine\Common\Persistence\ObjectManager;

/**
     * @Route("/")
     */
class HomeController extends AbstractController
{
    private $productRepository;
    private $em;
    public function __construct(ProductRepository $productRepository, ObjectManager $em)
    {
        $this->productRepository = $productRepository;
        $this->em = $em;

    }



    /**
     * @Route("/", name="home")
     */
    public function index(Request $request, PaginatorInterface $paginator): Response
    {
       $search = new ProductSearch();
       $sortByPrice = new ProductSearch();
       $sortBuCategory = new ProductSearch();
       $form = $this->createForm(ProductSearchType::class, $search);
       $form->handleRequest($request);

        $products = $paginator->paginate(
            $this->productRepository->findAllProductQuery($search,$sortBuCategory,$sortByPrice),
            $request->query->getInt('page',1),
            8
        );
            return $this->render('home/home.html.twig', [
            'products'    => $products,
            'form'        => $form->createView()
        ]);
        
    }

    /**
     *@Route("/about", name="about")
     */
    public function about()
    {
        return $this->render('about/about.html.twig');
    }
}
