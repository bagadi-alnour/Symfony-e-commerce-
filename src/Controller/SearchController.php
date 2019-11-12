<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\PropertyInfo\Tests\TypeTest;

class SearchController extends AbstractController
{
    /**
     * @Route("/search", name="search")
     */
    public function index()
    {
        return $this->render('search/index.html.twig', [
            'controller_name' => 'SearchController',
        ]);
    }
    /**
     * @Route("s")
     */
    public function search()
    {
        $form = $this->createFormBuilder(null)
            ->add('search', TextType::class)
            ->add('submit',SubmitType::class,[
                "attr" => [
                    "class" => "btn btn-outline-success"
                ]
            ])
            ->getForm();
            dump($form);
        return $this->render('search/index.html.twig',[
            "form" => $form->createView()
        ]);
    }
   
}
