{
  description = "melli.com";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    nix2container.url = "github:nlewo/nix2container";
    nix2container.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { self, nixpkgs, flake-utils, nix2container }:
    flake-utils.lib.eachDefaultSystem (system:
      with nixpkgs.legacyPackages.${system};
      {
        devShells.default = mkShell {
          nativeBuildInputs = [ bashInteractive ];
          buildInputs = [
            nodejs-16_x
            nodePackages.pnpm
            pandoc # convert generated datenschutz-melli.html to markdown
          ];
        };
        devShells.nextcloud = mkShell {
          nativeBuildInputs = [ bashInteractive ];
          buildInputs = [
            (writeShellScriptBin "pnpm" ''
              echo -e "\e[31mYOU ARE IN THE NEXTCLOUD - CANNOT USE \e[1mpnpm\e[0m\e[31m HERE\e[0m"
            '')
            (writeShellScriptBin "npm" ''
              echo -e "\e[31mNO HANSI, PLEASE ALSO NOT USE \e[1mnpm\e[0m\e[31m HERE\e[0m"
            '')
          ];
        };
        packages.container =
          with nix2container.packages.x86_64-linux.nix2container;
          buildImage
            {
              name = "docker.meetap.de/melli.com";
              tag = "latest";
              copyToRoot = [
                (pkgs.buildEnv {
                  name = "root";
                  paths = [ code-server nodePackages.pnpm ];
                  pathsToLink = [ "/bin" ];
                })
              ];
              config = {
                Cmd = [ "/bin/code-server" "--bind-addr" "0.0.0.0:8080" ];
              };
            };
      }
    );
}

