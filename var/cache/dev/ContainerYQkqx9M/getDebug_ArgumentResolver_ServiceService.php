<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'debug.argument_resolver.service' shared service.

include_once $this->targetDirs[3].'/vendor/symfony/http-kernel/Controller/ArgumentValueResolverInterface.php';
include_once $this->targetDirs[3].'/vendor/symfony/http-kernel/Controller/ArgumentResolver/TraceableValueResolver.php';
include_once $this->targetDirs[3].'/vendor/symfony/http-kernel/Controller/ArgumentResolver/ServiceValueResolver.php';

return $this->privates['debug.argument_resolver.service'] = new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\TraceableValueResolver(new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\ServiceValueResolver(new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'App\\Controller\\CategoryController::delete' => ['privates', '.service_locator..JzDQIR', 'get_ServiceLocator__JzDQIRService.php', true],
    'App\\Controller\\CategoryController::edit' => ['privates', '.service_locator..JzDQIR', 'get_ServiceLocator__JzDQIRService.php', true],
    'App\\Controller\\CategoryController::index' => ['privates', '.service_locator.a.laFVK', 'get_ServiceLocator_A_LaFVKService.php', true],
    'App\\Controller\\CategoryController::show' => ['privates', '.service_locator..JzDQIR', 'get_ServiceLocator__JzDQIRService.php', true],
    'App\\Controller\\HomeController::index' => ['privates', '.service_locator.jVNF2GQ', 'get_ServiceLocator_JVNF2GQService.php', true],
    'App\\Controller\\ProductController::delete' => ['privates', '.service_locator.ZzSB_Y3', 'get_ServiceLocator_ZzSBY3Service.php', true],
    'App\\Controller\\ProductController::edit' => ['privates', '.service_locator.ZzSB_Y3', 'get_ServiceLocator_ZzSBY3Service.php', true],
    'App\\Controller\\ProductController::index' => ['privates', '.service_locator.PeS.Fgc', 'get_ServiceLocator_PeS_FgcService.php', true],
    'App\\Controller\\ProductController::show' => ['privates', '.service_locator.ZzSB_Y3', 'get_ServiceLocator_ZzSBY3Service.php', true],
    'App\\Controller\\RegistrationController::register' => ['privates', '.service_locator.lm3AYgL', 'get_ServiceLocator_Lm3AYgLService.php', true],
    'App\\Controller\\SecurityController::login' => ['privates', '.service_locator.EbLunuf', 'get_ServiceLocator_EbLunufService.php', true],
    'App\\Controller\\CategoryController:delete' => ['privates', '.service_locator..JzDQIR', 'get_ServiceLocator__JzDQIRService.php', true],
    'App\\Controller\\CategoryController:edit' => ['privates', '.service_locator..JzDQIR', 'get_ServiceLocator__JzDQIRService.php', true],
    'App\\Controller\\CategoryController:index' => ['privates', '.service_locator.a.laFVK', 'get_ServiceLocator_A_LaFVKService.php', true],
    'App\\Controller\\CategoryController:show' => ['privates', '.service_locator..JzDQIR', 'get_ServiceLocator__JzDQIRService.php', true],
    'App\\Controller\\HomeController:index' => ['privates', '.service_locator.jVNF2GQ', 'get_ServiceLocator_JVNF2GQService.php', true],
    'App\\Controller\\ProductController:delete' => ['privates', '.service_locator.ZzSB_Y3', 'get_ServiceLocator_ZzSBY3Service.php', true],
    'App\\Controller\\ProductController:edit' => ['privates', '.service_locator.ZzSB_Y3', 'get_ServiceLocator_ZzSBY3Service.php', true],
    'App\\Controller\\ProductController:index' => ['privates', '.service_locator.PeS.Fgc', 'get_ServiceLocator_PeS_FgcService.php', true],
    'App\\Controller\\ProductController:show' => ['privates', '.service_locator.ZzSB_Y3', 'get_ServiceLocator_ZzSBY3Service.php', true],
    'App\\Controller\\RegistrationController:register' => ['privates', '.service_locator.lm3AYgL', 'get_ServiceLocator_Lm3AYgLService.php', true],
    'App\\Controller\\SecurityController:login' => ['privates', '.service_locator.EbLunuf', 'get_ServiceLocator_EbLunufService.php', true],
])), ($this->privates['debug.stopwatch'] ?? ($this->privates['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true))));
